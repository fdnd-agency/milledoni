export async function load({ url }) {
  // for now filter will work on /page
  // || 1 so that you will always start at the firstpage. Starting on the homepage with no page url will otherwise result in null
  const page = url.searchParams.get("page") || 1;

  // number of products shown on the page
  const limit = 15;

  //https://directus.io/docs/guides/connect/query-parameters#offset
  // -1 so that the offset doesnt skip the products on first page
  const offset = (page - 1) * limit;

  //offset -> items i do not want to shown
  //limit -> items i do want to show

 const productData = await fetch(
  `https://fdnd-agency.directus.app/items/milledoni_products?limit=${limit}&offset=${offset}&sort=-id&meta=total_count`
);


  const productRes = await productData.json();
  const products = productRes.data;

 // using total count in directus to retrieve ALL products and dived them in pages
 // total count is much better for performance then to just fetch all products since the querrys are read in the db itself and not after fetch
  const totalProducts = productRes.meta.total_count;
  const totalPages = Math.ceil(totalProducts / limit);

  console.log("total products:", totalProducts);
  console.log("number of pages:", totalPages);

  //  Clean tags for HTML  //

  // with map you get very longs arrays for some reason. flatmap returns each item seperatly
  const allTags = products.flatMap((product) =>
    product.tags
      ? //removal of commas and qoutes for clean text in HTML
        product.tags.split(",").map((tag) => tag.replace(/['\s]/g, " ").trim())
      : []
  );

  // this removes duplicate tags from being shown in the html
  // The spread operator is used to grab all excisting tags and remove the duplicate ones
  const uniqueTags = [...new Set(allTags)];

  return {
    products: products,
    tags: uniqueTags,
    page,
    totalProducts,
    totalPages
  };
}
