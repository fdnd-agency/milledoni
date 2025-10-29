// producten ophalen
export async function load(){

    const productData = await fetch ('https://fdnd-agency.directus.app/items/milledoni_products')
    const productResponse = await productData.json()

    console.log(productResponse.data[1]) // 1 product terug geven om te kijken of verbinding klopt

    return { product: productResponse.data } 

}