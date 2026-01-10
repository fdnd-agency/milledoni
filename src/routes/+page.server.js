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