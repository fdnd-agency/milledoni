


## <img width="25" alt="logo of Milledoni" src="https://github.com/user-attachments/assets/b42b13fa-0858-4347-b87c-3dae25ce2794" /> : About Milledoni
Milledoni was founded ten years ago. The platform focuses on offering products and services in the gift sector. What sets Milledoni apart is its personal approach: users are actively helped in finding a suitable and personalized gift through an AI chat feature. 

## sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.


## Introduction
We received the challenge to design and develop the Milledoni platform based on their new design. Our main focus was to renew and improve the website with better accessibility, responsiveness, and creative ideas to enhance the overall user experience.


## Stylesheet
We have recreated the stylesheet to get a clearer view of Milledoni’s brand identity before starting the design phase. We added more colors and improved the typography by using consistent white space.

<img width="344" height="708" alt="image" src="https://github.com/user-attachments/assets/12e931d0-14ae-46c2-934d-2cad3a13dd35" />


## Homepage design
We redesigned the Milledoni homepage to give it a more creative look and to move away from the typical webshop appearance, which Milledoni specifically wanted to avoid. The design follows their brand identity, with the layout taking inspiration from the Pinterest platform. It was created for both mobile and desktop to ensure full responsiveness.

One of the main challenges was finding a good layout balance between the product section and the AI chat, especially on mobile devices.

Homepage Elements
- Header: Logo, account link, and a button to open the menu
- AI Chat: Allows users to filter products through an AI conversation
- Filter: Manual product filtering options
- Product Cards: Display the available products in a flex layout
- Footer: Contains additional navigation and contact information


### Header
The header contains the Milledoni logo, a link to the user account, and a button that opens the menu for navigating to other pages.
On mobile devices, a smaller version of the logo is used because of the limited screen space.

*Header design on mobile view*

<img height="50" alt="image" src="https://github.com/user-attachments/assets/9cecebc6-7117-4080-89ce-8dd61f5012d4" />

*Header design on desktop view*

<img height="50" alt="image" src="https://github.com/user-attachments/assets/07f34b1e-8a74-4a83-9c13-36de6eda21ce" />


### Product Cards

The products are displayed in cards on the homepage. Each card shows a large image, the product name below it, and a link to the product detail page. Users can also like a product by clicking the like button.

*Individual card*

<img height="300" alt="image" src="https://github.com/user-attachments/assets/4f32765f-944f-49e6-8185-606ae9c6ca33" />

Regarding the clickable area: we considered making the entire card clickable, but since each card also has a like button, we decided that only the product image and the “Bekijk product” link lead to the detail page. This prevents the like button and the link from interfering with each other.

*Clickable area*

<img height="300" alt="image" src="https://github.com/user-attachments/assets/cff8c1a0-3e4b-4b7b-8c00-48643cab8d35" />

To make the cards appear more fun and creative, we decided to use an asymmetrical layout.

*Asymmetrical layout*

<img height="200" alt="image" src="https://github.com/user-attachments/assets/29bea58f-3c37-4c17-ac19-750f4acd9f61" />

Since there are over 1,000 products, we divided the cards into categories for a better user experience.

*Divided into categories*

<img height="400" alt="image" src="https://github.com/user-attachments/assets/7bd2d0c7-2c93-4806-ac3e-e6232ad0704b" />


## Homepage 
Our redesinged homepage has made a lot of improvements on accesability, reusability and UX. The new homepage introduces new functions like pagination and a completely new layout.
Some of the change include the following:

### Filter
Some people still prefer using manual filtering instead of chatting with AI, that’s why we use both. The background of the filter looks like wrapping paper, since Milledoni is all about presents, we thought it would be a fitting design choice.

The filter layout differs between mobile and desktop due to the available screen space.

Mobile:
On mobile, the filter is already unfolded when entering the homepage. By clicking on one of the three categories, the filter unfolds further so you can select different options.

*Mobile interaction*

<img height="200" alt="image" src="https://github.com/user-attachments/assets/38708b56-51a0-429d-a5d2-0b3e7e851861" />

Desktop:
On desktop, the filter starts folded. By clicking on the “Filter” button, it unfolds and lets you select options per category.
Since there’s more room on desktop, you can skip one extra click compared to mobile.

*Desktop interaction*

<img width="2131" height="687" alt="image" src="https://github.com/user-attachments/assets/0e6418bb-2f15-4ef1-bdfd-3d20ced02ee7" />

Due to incomplete filters in the CMS and a missing structure we decided to build the filter but not making it work. The filter thats currently on the homepagehas been made fully accesible and only misses the filter on tag function.

### Pagination

<img width="2276" height="878" alt="image" src="https://github.com/user-attachments/assets/c7bb1d88-6c08-4e16-8461-2388935cb307" />

In order to keep the dashboard clean and keep the performance under control we don't want to load in all 1800+ products at the same time.
For this reason we built a pagination function. This function works really well with the querry parameters in Directus (headless CMS).

In order to dividde the pages we need to set a limit on the amount of products per page. Then we will divide all our products with our limit to decide how many pages are needed.
```JS
  const limit = 15;

  //https://directus.io/docs/guides/connect/query-parameters#offset
  // -1 so that the offset doesnt skip the products on first page

  const offset = (page - 1) * limit;

  //offset -> items you do not want to shown
  //limit -> items you do want to show

 const productData = await fetch(
  `https://fdnd-agency.directus.app/items/milledoni_products?limit=${limit}&offset=${offset}&sort=-id&meta=total_count`
);

  const productRes = await productData.json();
  const products = productRes.data;

 // using total count in directus to retrieve ALL products and dived them in pages
 // total count is much better for performance then to just fetch all products since the querrys are read in the db itself and not after fetch
  const totalProducts = productRes.meta.total_count;
  const totalPages = Math.ceil(totalProducts / limit);


  return {
    totalProducts,
    totalPages
  };

```

The filter works by chaning the url. So each button will change the url like /?page=<pagenumber>. This number is what we will use in our pagination.
```svelte

    {#if Number(data.page) > 2}
      <li>
        <button onclick={() => goto(`/?page=${Number(data.page) - 1}`)}>
          {Number(data.page) - 1}
        </button>
      </li>
    {/if}


    <li>
      <button class="active" disabled>
        {data.page} 
      </button>
    </li>


    {#if Number(data.page) < data.totalPages - 1}
      <li>
        <button onclick={() => goto(`/?page=${Number(data.page) + 1}`)}>
          {Number(data.page) + 1}
        </button>
      </li>
    {/if}

```


## Detailpage

Each product has it's own page. In this page extra information is provided about the product like a photogallery and shop function.

On desktop the image has a small photo gallery next to it while on mobile is it will become a scrollable carousel.

Desktop:

<img width="2535" height="827" alt="image" src="https://github.com/user-attachments/assets/23244a6b-c8e8-43d0-a3e6-c69dce79acb7" />



Mobile:

<img width="678" height="1286" alt="Screenshot 2026-01-22 092053" src="https://github.com/user-attachments/assets/4859dbfe-e0cd-4466-8b6d-2bfeea4f13c0" />


The carousel is built using buttons to make the images interactive.
```HTML

<aside>
    <img class="main-img" src={mainImageSrc} alt={mainImageAlt} />
    <div class="carousel">
      {#each productImages as image}
        <button onclick={() => changeImage(image)}>
          <img class="display-img" src={image.src} alt={image.alt} />
        </button>
      {/each}
    </div>
  </aside>

```
Since the products only contain a single image for now, we decided to use placeholder images to visualise the interaction. Using state we change the content of the image:
``` JS
  const productImages = [
    { src: product.image, alt: `${product.name} - hoofdafbeelding` },
    { src: cheeseImg, alt: `${product.name} - detail weergave` },
    { src: starImg, alt: `${product.name} - alternatieve weergave` }
  ];

  let mainImageSrc = $state(productImages[0].src);
  let mainImageAlt = $state(productImages[0].alt);

  function changeImage(image) {
    mainImageSrc = image.src;
    mainImageAlt = image.alt;
  }
```


