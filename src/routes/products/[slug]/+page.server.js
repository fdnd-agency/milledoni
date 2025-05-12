import fetchJson from "$lib/fetch-json.js";

export async function load({ params }) {
    const url = `https://fdnd-agency.directus.app/items/milledoni_products?filter[slug][_eq]=${encodeURIComponent(params.slug)}`;
    
    try {
        const product = await fetchJson(url);

        return {
            product: product.data,
            slug: params.slug
        };
    } catch (error) {
        console.error('Error fetching product:', error);
        throw new Error('Failed to load product data');
    }
}