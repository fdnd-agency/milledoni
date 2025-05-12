import { json } from '@sveltejs/kit'
import { OPENAI_API_KEY } from '$env/static/private'

export async function POST({ request }) {
	const { message } = await request.json()

	const response = await fetch('https://api.openai.com/v1/chat/completions', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${OPENAI_API_KEY}`
		},
		body: JSON.stringify({
			model: 'gpt-4o',
			messages: [{ role: 'user', content: message }]
		})
	})

	const data = await response.json()
	return json({ reply: data.choices[0].message.content })
}
