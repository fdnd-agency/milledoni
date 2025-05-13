import fetchJson from "$lib/fetch-json.js";


export async function load() {
    const milledoniUsers = 'https://fdnd-agency.directus.app/items/milledoni_users'
    const milledoniProducts = 'https://fdnd-agency.directus.app/items/milledoni_products'
    const users = await fetchJson(milledoniUsers)
    const products = await fetchJson(milledoniProducts)
    return {
        users: users.data,
        products: products.data
    }
}