export async function load({ params, parent }) {
  // get the params for slug name  
  const { slug } = params;

  const { product: products } = await parent();

  // get correct product info
  const product = products.find(
    (product) => product.slug === slug
  );

  return {
    product
  };
}
