// Connecting the database with users
export async function load({ fetch }) {
	const likesRes = await fetch(
		'https://fdnd-agency.directus.app/items/milledoni_users'
	);

	const likesResponse = await likesRes.json();

	return {
		likes: likesResponse.data
	};
}

// Posting likes
export const actions = {
	like: async ({ request, fetch }) => {
		const data = await request.formData();
		const productId = data.get('productId');

		await fetch('https://fdnd-agency.directus.app/items/milledoni_users', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				name: 'Milledoni',
	            liked_products: [productId]
			})
		});

		return { success: true };
	}
};