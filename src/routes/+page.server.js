export const actions = {
	like: async ({ request, fetch }) => {
		const data = await request.formData();
		const productId = data.get('productId');
		const userId = 6; // temporary hardcoded id

		try {
			// Build a filtered URL to check if the user already liked this product (limit to 1 result)
			const toggleLikeUrl = createUrl('milledoni_users_milledoni_products', {
				'filter[milledoni_users_id][id][_eq]': userId,
				'filter[milledoni_products_id][id][_eq]': productId,
				limit: 1,
			});
			const existingLikeResponse = await fetch(toggleLikeUrl);
			const existingLike = await existingLikeResponse.json();

			if (existingLike.data.length > 0) {
				console.log('[LIKE] Already exists for product', productId);
				return { success: true, alreadyLiked: true };
			}

			// Create a like by adding the product id to the array with all liked products connected to the user id  
			await fetch('https://fdnd-agency.directus.app/items/milledoni_users_milledoni_products', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					milledoni_users_id: userId,
					milledoni_products_id: Number(productId)
				})
			});

			console.log('[LIKE] Created for product', productId);
			return { success: true };
		} 
		
		catch (error) {
			console.error('Error:', error);
			return { success: false, error: error.message };
		}
	},

	unlike: async ({ request, fetch }) => {
		const data = await request.formData();
		const productId = data.get('productId');
		const userId = 6; // temporary hardcoded id

		try {
			// Build a filtered URL to check if the user already liked this product (limit to 1 result)
			const toggleLikeUrl = createUrl('milledoni_users_milledoni_products', {
				'filter[milledoni_users_id][_eq]': userId,
				'filter[milledoni_products_id][_eq]': productId,
				limit: 1
			});

			const response = await fetch(toggleLikeUrl);
			const result = await response.json();

			// If the like excists, delete it
			if (result.data.length > 0) {
				const likeId = result.data[0].id; // GET the liked products id 
				
				console.log('The liked id has been found:', likeId);

				const deleteUrl = `https://fdnd-agency.directus.app/items/milledoni_users_milledoni_products/${likeId}`; // Delete the liked product id
				
				await fetch(deleteUrl, {
					method: 'DELETE'
				});

				console.log('[UNLIKE] The like has succesfully been removed from the product', productId);
				return { success: true };

				} 
			else {
				console.log('Like has not been found');
				return { success: false, message: 'Like has not been found' };
			}
		}
		
		catch (error) {
			console.error('Error: could not remove like:', error);
			return { success: false, error: error.message };
		}
	}
};

 // Helper function to create a Directus API URL with filters
 function createUrl(endpoint, params = {}) {
	const url = new URL(endpoint, 'https://fdnd-agency.directus.app/items/'); // Create the base url
	url.search = new URLSearchParams(params); // Add the query parameters (filtering to get specific data)
	return url; // Return the complete URL with endpoint and query parameters combined
}

// Load all liked products for the current user
export async function load({ fetch }) {
	const userId = 6; // temporary hardcoded id
	const likedProductsUrl = createUrl( // Create the URL with the liked products filtered
		'milledoni_users_milledoni_products',
		{
			'filter[milledoni_users_id][id][_eq]': userId,
			'fields[]': 'milledoni_products_id'
		}
	);

	const res = await fetch(likedProductsUrl);
	const json = await res.json();

	// Get the product ID's of all liked products and combine them into a single array for example [1692, 1695, 1699]
	const likedProductIds = json.data.map(
		item => item.milledoni_products_id
	);

	return {
		likedProductIds
	};
}