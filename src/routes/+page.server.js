import fetchJson from "$lib/fetch-json.js";

export async function load() {
	const users = await fetchJson('https://fdnd-agency.directus.app/items/milledoni_users');
	const products = await fetchJson('https://fdnd-agency.directus.app/items/milledoni_products');

	const tagSet = new Set();

	for (const product of products.data) {
		if (typeof product.tags === 'string') {
			const tags = product.tags.split(',').map(t =>
				t.trim().toLowerCase().replace(/^'+|'+$/g, '')
			);
			for (const tag of tags) {
				if (tag) tagSet.add(tag);
			}
		}
	}

	const tags = Array.from(tagSet);

	return {
		users: users.data,
		products: products.data,
		tags
	};
}
