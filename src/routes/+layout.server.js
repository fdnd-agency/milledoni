export async function load() {
   //get products
    const productData = await fetch('https://fdnd-agency.directus.app/items/milledoni_products');

    const productResponse = await productData.json();
     const products = productResponse.data;


    const allTags = products
        .flatMap(product => 
            product.tags ? product.tags.split(',').map(tag => tag.replace(/['\s]/g, '').trim()) : [] // removal of spacebars and qoutes. That will look bad in the html
        );

   
    const uniqueTags = [...new Set(allTags)]; //no duplicate  filters with set()


    console.log(uniqueTags); //log the tags for debug purpose

   
    return { 
       product: products,
        tags: uniqueTags
    };
}
