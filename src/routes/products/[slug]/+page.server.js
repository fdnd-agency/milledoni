import fetchJson from "$lib/fetch-json.js";

export async function load({ params }) {
    const url = `https://fdnd-agency.directus.app/items/milledoni_products/${params.slug}`;
    
    const product = await fetchJson(url);

    console.log('Fetched product:', product);

    return {
        product: product.data,
        slug: params.slug
    };
}