// Helper function to create a Directus API URL with filters
function createUrl(endpoint, params = {}) {
	// Create the base url
	const url = new URL(endpoint, 'https://fdnd-agency.directus.app/items/');
	// Add the query parameters (filtering to get specific data)
	url.search = new URLSearchParams(params);
	// Return the complete URL with endpoint and query parameters combined
	return url;
}

// Load all liked products for the current user
export async function load({ fetch }) {
	const userId = 6; // temporary hardcoded id

	// Build the URL with filters to get liked products for the user
	const likedProductsUrl = createUrl(
		'milledoni_users_milledoni_products',
		{
			'filter[milledoni_users_id][id][_eq]': userId,
			'fields[]': 'milledoni_products_id'
		}
	);

	const res = await fetch(likedProductsUrl);
	const json = await res.json();

	// Get the product ID's of all liked products and combine them into a single array e.g. [1692, 1695, 1699]
	const likedProductIds = json.data.map(
		item => item.milledoni_products_id
	);

	return {
		likedProductIds
	};
}

// ACTION - handle liking a product
// Checks if the current user has already liked this product
export const actions = {
	like: async ({ request, fetch }) => {
		const data = await request.formData();
		const productId = data.get('productId');

		const userId = 6; // temporary hardcoded id

		// Build a filtered URL to check if the user already liked this product (limit to 1 result)
		const toggleLikeUrl = createUrl(
			'milledoni_users_milledoni_products',
			{
				'filter[milledoni_users_id][id][_eq]': userId,
				'filter[milledoni_products_id][id][_eq]': productId,
				limit: 1,
			}
		);

		const existingLikeResponse = await fetch(toggleLikeUrl);
		const existingLike = await existingLikeResponse.json();

		// Create a like by adding the product id to the array with all liked products connected to the user id  
		await fetch(
			'https://fdnd-agency.directus.app/items/milledoni_users_milledoni_products',
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					milledoni_users_id: userId,
					milledoni_products_id: Number(productId)
				})
			});

		return { success: true };
	}
};