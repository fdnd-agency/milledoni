import fetchJson from "$lib/fetch-json.js";

export async function load({ url }) {
	const search = url.searchParams.get('search')?.toLowerCase() || '';
	const milledoniUsers = 'https://fdnd-agency.directus.app/items/milledoni_users';
	const milledoniProducts = 'https://fdnd-agency.directus.app/items/milledoni_products';

	const users = await fetchJson(milledoniUsers);
	const productsData = await fetchJson(milledoniProducts);

	let products = productsData.data;

	if (search) {
		products = products.filter(product =>
			product.name.toLowerCase().includes(search)
		);
	}

	return {
		users: users.data,
		products,
		search
	};
}
