import fetchJson from '$lib/fetch-json.js';

export async function load({ url }) {
	const loggedIn = false; // toggle for testing

	const productsResponse = await fetchJson('https://fdnd-agency.directus.app/items/milledoni_products');

	const tagSet = new Set();
	for (const product of productsResponse.data) {
		if (typeof product.tags === 'string') {
			const tags = product.tags
				.split(',')
				.map(t => t.trim().toLowerCase().replace(/^'+|'+$/g, ''));
			tags.forEach(tag => tagSet.add(tag));
		}
	}

	const tags = Array.from(tagSet);

	return {
		currentPath: url.pathname,
		loggedIn,
		tags
	};
}
