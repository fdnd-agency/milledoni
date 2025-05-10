import fetchJson from "$lib/fetch-json.js";

// Define the structure of a product
/**
 * @typedef {Object} Product
 * @property {string} slug - The unique slug of the product
 * @property {string} name - The name of the product
 * @property {string} image - The image URL of the product
 * @property {string} description - The description of the product
 * @property {string} shop_url - The shop URL of the product
 * @property {string} amount - The price or amount of the product
 */

// Define the load function
export async function load({ params }) {
    const productSlug = params.slug; // Use 'slug' to match the folder name
    const milledoniProducts = 'https://fdnd-agency.directus.app/items/milledoni_products';
    
    /** @type {{ data: Product[] }} */
    const products = await fetchJson(milledoniProducts);
    const product = products.data.find((p) => p.slug === productSlug);

    if (!product) {
        return { status: 404, error: new Error('Product not found') };
    }

return {
    product
};

}