import fetchJson from "$lib/fetch-json.js";

export async function load({ params }) {
    const detailUrl = `https://fdnd-agency.directus.app/items/milledoni_products?filter[slug][_eq]=${params.slug}`;

    const detail = await fetchJson(detailUrl);

    return {
        product: detail.data[0],
        slug: params.slug
    };
}