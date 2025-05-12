import { OPENAI_API_KEY } from '$env/static/private';

export async function POST({ request }) {
	const { messages } = await request.json();

	const res = await fetch('https://api.openai.com/v1/chat/completions', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${OPENAI_API_KEY}`
		},
		body: JSON.stringify({
			model: 'gpt-4o',
			messages,
			temperature: 0.7
		})
	});

	const data = await res.json();
	const reply = data.choices?.[0]?.message?.content || 'Sorry, er ging iets mis.';
	return new Response(JSON.stringify({ reply }));
}
