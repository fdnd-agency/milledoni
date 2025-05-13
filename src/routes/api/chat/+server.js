import { OPENAI_API_KEY } from '$env/static/private';

export async function POST({ request }) {
	const { messages } = await request.json();

	try {
		const res = await fetch('https://api.openai.com/v1/chat/completions', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${OPENAI_API_KEY}`
			},
			body: JSON.stringify({
				model: 'gpt-4o',
				messages: messages.slice(0, 1).concat(messages.slice(-10)), // system + laatste 10
				temperature: 0.7
			})
		});

		if (!res.ok) {
			console.error(`OpenAI API fout: ${res.status} - ${await res.text()}`);
			return new Response(JSON.stringify({ reply: 'Er ging iets mis bij het ophalen van het antwoord.' }), { status: 500 });
		}

		const data = await res.json();
		const reply = data.choices?.[0]?.message?.content || 'Sorry, er ging iets mis.';
		return new Response(JSON.stringify({ reply }));
	} catch (err) {
		console.error('Interne fout:', err);
		return new Response(JSON.stringify({ reply: 'Er is een onverwachte fout opgetreden.' }), { status: 500 });
	}
}
