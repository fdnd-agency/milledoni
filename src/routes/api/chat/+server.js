import { OPENAI_API_KEY } from '$env/static/private';
import { containsBlockedTerm } from '$lib/utils/blocklist.js';

export async function POST({ request }) {
	const { messages } = await request.json();
	
	const userMessage = messages[messages.length - 1]?.content || '';

	if (containsBlockedTerm(userMessage)) {
		return new Response(
			JSON.stringify({
				reply: 'Je bericht bevat ongepaste woorden. Probeer het op een andere manier.',
				tags: []
			}),
			{ status: 400 }
		);
	}

	try {
		const res = await fetch('https://api.openai.com/v1/chat/completions', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${OPENAI_API_KEY}`
			},
			body: JSON.stringify({
				model: 'gpt-4o',
				messages: messages.slice(0, 1).concat(messages.slice(-10)),
				temperature: 0.7
			})
		});

		if (!res.ok) {
			console.error(`OpenAI API fout: ${res.status} - ${await res.text()}`);
			return new Response(
				JSON.stringify({ reply: 'Er ging iets mis bij het ophalen van het antwoord.', tags: [] }),
				{ status: 500 }
			);
		}

		const data = await res.json();
		let raw = data.choices?.[0]?.message?.content;

		let reply = 'Sorry, er ging iets mis.';
		let tags = [];

		try {
			const parsed = JSON.parse(raw);
			reply = parsed.reply || reply;
			tags = parsed.tags || [];
		} catch (e) {
			console.warn("Kon geen JSON parsen uit AI-response:", raw);
			reply = raw;
		}

		return new Response(JSON.stringify({ reply, tags }));
	} catch (err) {
		console.error('Interne fout:', err);
		return new Response(
			JSON.stringify({ reply: 'Er is een onverwachte fout opgetreden.', tags: [] }),
			{ status: 500 }
		);
	}
}
