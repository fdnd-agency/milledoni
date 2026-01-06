export async function load({ params }) {
  //use the params of the product.slug to use in url. 
  const { slug } = params;

  // new fetch because using find in js to match the slug is worse for performance
  // this way you specificly search for the product
  const res = await fetch(
    `https://fdnd-agency.directus.app/items/milledoni_products?filter[slug][_eq]=${slug}`
  );

  const productRes = await res.json();

  console.log(productRes);

  //[0] because it will return an array otherwise :/
  const product = productRes.data[0];

  // strip tags of commas and quotes
  // wil make a util out of this because  im using this in layout.server as well...
  const cleanTags = product?.tags
    ? product.tags.split(",").map((tag) => tag.replace(/['"]/g, "").trim())
    : [];

  return {
    product,
    cleanTags,
  };
}
