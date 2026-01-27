## Table of contents
- [Introduction](#introduction)
- [About Milledoni](#about-milledoni)
- [Getting Started with SvelteKit](#getting-started-with-sveltekit)
	- [Creating a project](#creating-a-project)
   	- [Developing](#developing)
    - [Building](#building)
- [Features & Components](#features--components)
	- [Header](#header)
    - [Products](#products)
    - [Filter system](#filter-system)
    - [Like interaction](#like-interaction)
    - [Detail Page](#building)
    - [Pagination](#building)
- [Design system](#design-system)
	- [Brand identity](#brand-identity)
   	- [Redesign](#redesign)
  	- [AI Chat](#ai-chat-design)
    - [Custom Properties](#custom-properties)
- [Contributing](#contributing) 
- [License](#license)

## Introduction
We received the challenge to design and develop the Milledoni platform based on their new design. Our main focus was to renew and improve the website with better accessibility, responsiveness, and creative ideas to enhance the overall user experience.

## About Milledoni
Milledoni was founded ten years ago. The platform focuses on offering products and services in the gift sector. What sets Milledoni apart is its personal approach: users are actively helped in finding a suitable and personalized gift through an AI chat feature. 

## Getting Started with SvelteKit

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

### Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

### Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Features & Components

### Header
The header is implemented as a reusable component to maintain consistency across multiple pages. It contains Milledoni's logo, an account link, and a navigation menu with links to pages such as Home, About, and Spotters.

#### Responsive Design

All header components are fully responsive using both **media queries** and **container queries**. I prefer container queries for components because they calculate based on the container's size rather than the viewport, allowing components to adapt based on their available space.

**Media queries** - calculate based on screen size:
```css
@media (min-width: 768px) {
    max-width: 35vw;
}
```

**Container queries** - calculate based on container size:
```css
@container (width > 200px) {
    .symbol-account::after {
        content: "Mijn Account";
    }
}
```

#### Component States

**Logo**

The logo has 2 responsive states:

<img width="82" alt="Logo compact" src="https://github.com/user-attachments/assets/3f3a3972-e49e-49b2-bea0-0410bd0d3172" /> <img width="254" alt="Logo expanded" src="https://github.com/user-attachments/assets/2c36b59a-e4f2-4d94-afdb-9db074c3f3d9" />

**Account Link**

The account link adapts to 3 different states:

<img width="77" alt="Account icon only" src="https://github.com/user-attachments/assets/4eb3d528-5cf8-4510-ac1f-49bc2ee4f190" /> <img width="168" alt="Account with text" src="https://github.com/user-attachments/assets/5cf2c2ba-a724-48b8-81d7-3379fe306829" /> <img width="205" alt="Account expanded" src="https://github.com/user-attachments/assets/be16d5c8-0e9d-4289-b478-37db0d1829c4" />

**Menu Button**

<img width="80" alt="Menu button" src="https://github.com/user-attachments/assets/0f7ab46d-60be-4114-96ed-ba90af602cb1" />

#### Navigation Menu

**Mobile & desktop view:**

<img height="400" alt="Mobile menu" src="https://github.com/user-attachments/assets/e341597b-f46d-4058-9de4-557f0eecbdb4" /> <img height="400" alt="Desktop menu" src="https://github.com/user-attachments/assets/c91dcfa4-d39e-41a8-bbab-79de72c7b0ec" />


### Products

Products are displayed on the homepage using the `Product.svelte` component. Each product card contains:
- Product image
- Title
- Link to the detail page
- Like button

#### Responsive Grid Layout

The product grid uses CSS Grid with `minmax()` to create a flexible, responsive layout. Cards automatically adjust to fill available space, adding more columns as the viewport widens.

```css
ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 5rem 1rem;
}
```

This way, the cards nake optimal use of space across all device sizes without relying on fixed breakpoints.

#### Clickable Area Design Decision

While we considered making the entire card clickable for convenience, we decided against this approach. Since each card contains both a like button and a product link, making the entire card clickable would create conflicting interactions. Instead, only the product image and the "Bekijk product" link navigate to the detail page, ensuring the like button functions independently without interference.

**Mobile**

<img height="400" alt="Product grid on mobile - single column" src="https://github.com/user-attachments/assets/086d235c-a91c-49e4-8b9c-4b298cf18932" />

**Tablet**

<img height="400" alt="Product grid on tablet - two columns" src="https://github.com/user-attachments/assets/c6944a19-98d7-4458-92f5-574fd952093b" />

**Desktop**

<img height="400" alt="Product grid on desktop - multiple columns" src="https://github.com/user-attachments/assets/bacd2157-67f7-46e0-b908-12edc36b2aae" />


### Filter system
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


### Like Interaction

Users can like and unlike products on Milledoni. This feature is implemented using the `LikeButton.svelte` component and the `+page.server.js` server file.

#### Accessibility

The button states have been tested with a color contrast checker to ensure the contrast ratios are enough for users with visual difficulties.

#### Button States

The like button contains three visual states:

| Default | Hover | Active (Liked) |
|---------|-------|----------------|
| <img height="50" alt="Default state" src="https://github.com/user-attachments/assets/bf048ef7-3038-44d7-9096-f2f0f4149b93" /> | <img height="50" alt="Hover state" src="https://github.com/user-attachments/assets/3dd96185-d4c5-4f54-8225-0f986becd488" /> | <img height="50" alt="Active liked state" src="https://github.com/user-attachments/assets/48f7fc09-f93f-42b6-89ce-ab19f7bb6158" /> |

<img height="400" alt="Like button in product context" src="https://github.com/user-attachments/assets/df0dbe8a-d468-43d2-9c1d-7cf3b2e47d9a" />

**Future Improvements:** Additional states should be added for better UX, including loading and error states to provide feedback during API calls.

#### Implementation

**Form-Based Approach**

The like functionality uses progressive enhancement with HTML forms. Two forms handle the like/unlike actions:

```svelte
{#if isLiked}
    <form method="POST" action="?/unlike" use:enhance>
        <input type="hidden" name="productId" value={productId} />
        <button type="submit">
            <img src={LikedIcon} alt="unlike" />Unlike
        </button>
    </form>
{:else}
    <form method="POST" action="?/like" use:enhance>
        <input type="hidden" name="productId" value={productId} />
        <button type="submit">
            <img src={UnlikedIcon} alt="like" />Like
        </button>
    </form>
{/if}
```

**Server Actions**

**POST Request (Like)**

Creates a new like between the user and product in the database:

```javascript
like: async ({ request, fetch }) => {
    const data = await request.formData();
    const productId = data.get('productId');
    const userId = 6; // TODO: Replace with authenticated user ID from session
    
    try {
        // Build a filtered URL to check if the user already liked this product (limit to 1 result)
        const toggleLikeUrl = createUrl('milledoni_users_milledoni_products', {
            'filter[milledoni_users_id][id][_eq]': userId,
            'filter[milledoni_products_id][id][_eq]': productId,
            limit: 1,
        });
        
        const existingLikeResponse = await fetch(toggleLikeUrl);
        const existingLike = await existingLikeResponse.json();
        
        // Create a like by adding the product id to the array with all liked products connected to the user id  
        await fetch('https://fdnd-agency.directus.app/items/milledoni_users_milledoni_products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                milledoni_users_id: userId,
                milledoni_products_id: Number(productId)
            })
        });
    } catch (error) {
			console.error('Error:', error);
			return { success: false, error: error.message };
    }
}
```

**DELETE Request (Unlike)**

Removes the like from the database:

```javascript
unlike: async ({ request, fetch }) => {
    const data = await request.formData();
    const productId = data.get('productId');
    const userId = 6; // TODO: Replace with authenticated user ID from session
    
    try {
        // Build a filtered URL to check if the user already liked this product (limit to 1 result)
        const toggleLikeUrl = createUrl('milledoni_users_milledoni_products', {
            'filter[milledoni_users_id][_eq]': userId,
            'filter[milledoni_products_id][_eq]': productId,
            limit: 1
        });
        
        const response = await fetch(toggleLikeUrl);
        const result = await response.json();
        
        // If the like excists, delete it
        if (result.data.length > 0) {
            const likeId = result.data[0].id;
            console.log('Found like ID:', likeId);
            
            const deleteUrl = `https://fdnd-agency.directus.app/items/milledoni_users_milledoni_products/${likeId}`;
            
            await fetch(deleteUrl, {
                method: 'DELETE'
            });
        }
    } catch (error) {
			console.error('Error: could not remove like:', error);
			return { success: false, error: error.message };
    }
}
```

#### Database Structure

Likes are stored in a table (`milledoni_users_milledoni_products`) that creates a bond between users and products. 

**Example:** View all liked products for user ID 6:  
`https://fdnd-agency.directus.app/items/milledoni_users_milledoni_products?filter[milledoni_users_id][_eq]=6`

**Known Limitations:**
- User ID is currently hardcoded (value: 6) and needs to be replaced with unique id's
- No loading or error states in the UI


### Detailpage

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

## Design system

### Brand identity 
We have recreated the stylesheet to get a clearer view of Milledoni’s brand identity before starting the design phase. We added more colors and improved the typography by using consistent white space.

<img width="344" height="708" alt="image" src="https://github.com/user-attachments/assets/12e931d0-14ae-46c2-934d-2cad3a13dd35" />

<-- Add more about the brand identity -->


### Redesign 
Our redesinged homepage has made a lot of improvements on accesability, reusability and UX. The new homepage introduces new functions like pagination and a completely new layout.
Some of the change include the following:

We redesigned the Milledoni homepage to give it a more creative look and to move away from the typical webshop appearance, which Milledoni specifically wanted to avoid. The design follows their brand identity, with the layout taking inspiration from the Pinterest platform. It was created for both mobile and desktop to ensure full responsiveness.

One of the main challenges was finding a good layout balance between the product section and the AI chat, especially on mobile devices.

*Milledoni's design*

<img height="400" alt="image" src="https://github.com/user-attachments/assets/d3d85b99-4cd3-4680-b6be-5df37f08722a" />

*Our redesign*

<img height="400" alt="image" src="https://github.com/user-attachments/assets/33f9f0a2-433a-4201-aab0-ac34ea98cbb5" /> <img height="400" alt="image" src="https://github.com/user-attachments/assets/9d785fd6-366b-448e-a8b3-3216ff98437b" />


### AI Chat design

The AI chat is a core feature of Milledoni. An existing design was available, but it only worked on desktop. The challenge was to make the chat responsive while ensuring products remain visible at all times, even during conversations.

#### Design Process

We created multiple design variations to experiment with different approaches. The final design addresses the key requirements:

**Key Features:**
- **Persistent positioning:** The chat button stays fixed at the bottom of the screen, accessible while scrolling
- **Non-intrusive overlay:** When active, the chat doesn't cover the entire screen, allowing users to see products in the background
- **Header optimization:** The header disappears when the chat is active to create more space
- **Live product count:** A counter shows the number of filtered results, updating the users when they interact with the chat
- **Active filters display:** Selected filters appear above the chat (below the result count) with the option to remove them
- **Easy dismissal:** A close button allows users to quickly return to browsing

<img width="632" alt="AI chat responsive design" src="https://github.com/user-attachments/assets/17cccee5-b7d9-4a01-8693-59801c6c0938" />

**Status:** Design phase - not yet implemented in code.


### Custom Properties

We implemented CSS custom properties to ensure consistency, maintainability, and scalability across the entire application. The custom properties take care of all design values are defined in one place which makes it easier to make changes across the entire application. It also prevents inconsistencies from hardcoded values in components. 

#### Implementation

All custom properties are defined in `src/lib/styles/style.css` and imported globally through `+layout.svelte`:
```javascript
import '$lib/styles/style.css';
```

This ensures all components have access to the custom properties.


#### Naming Convention

We follow a **semantic naming convention** that describes the purpose rather than the value:

Correct: `--primary-color-hover` (describes when to use it)

Incorrect: `--yellow-lighter` (describes what it is)

This way we'll only have to change the color values and prevent renaming the variables. 


#### Responsive Typography

Headers use the `clamp()` function for responsive sizing without media queries:

```css
--h1-font-size: clamp(2rem, 5vw, 4.0625rem);
```

This creates typography that starts at a minimum of 2rem on a small screen and can scale up to the max of 4.0625rem taking 5vw as middle point. 


#### Organization

Our custom properties are organized into logical categories:

**Typography**

```css
/* Fonts */
  --font-family: "Parkisans", serif;

  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semi-bold: 600;
  --font-weight-bold: 700;
  --font-weight-extra-bold: 800;

  /* headings */
  --h1-font-size: clamp(2rem, 5vw, 4.0625rem);
  --h2-font-size: clamp(1.5rem, 4vw, 2.5625rem);
  --h3-font-size: clamp(1.2rem, 3vw, 1.6rem);

  --h1-line-height: 1.1;
  --h2-line-height: 1.1;
  --h3-line-height: 1.1;
  --h4-line-height: 1.1;

  /* normal text */

  --text-font-size-s: clamp(1rem, 2vw, 1.5rem);
  --text-font-size-m: clamp(1.25rem, 2.5vw, 1.75rem);
  --text-font-size-l: clamp(1.5rem, 2.5vw, 2rem);

  --text-line-height: 1.5;

```
**Colors**

```css
/* standard colors */
  --neutral-color-background: hsl(0 0 100);
  --neutral-color-background-menu: hsl(0 5 96);
  --neutral-color-background-cards: hsl(0 5 96);
  --neutral-color-background-icons: hsl(0, 0%, 0%);

  --primary-color-light: hsl(57 100 72);
  --primary-color-hover: hsl(46 100 64);
  --primary-color: hsl(47 100 44);
  --primary-color-dark: hsl(45 100 37);
  --primary-color-deep: hsl(37 100 24);

  --accent-color-light: hsl(164 53 55);
  --accent-color-hover: hsl(166 68 39);
  --accent-color: hsl(167 100 25);
  --accent-color-dark: hsl(164 100 19);
  --accent-color-deep: hsl(159 100 13);

  /* Color themes */
  /* change --accent-color-... into one of these */
  --valentine-color-light: hsl(335 97 85);
  --valentine-color-hover: hsl(326 58 56);
  --valentine-color: hsl(323 63 41);
  --valentine-color-dark: hsl(320 100 26);
  --valentine-color-deep: hsl(324 100 19);

  --christmas-color-light: hsl(6 67 55);
  --christmas-color-hover: hsl(4 70 41);
  --christmas-color: hsl(0 100 27);
  --christmas-color-dark: hsl(0 100 20);
  --christmas-color-deep: hsl(0 100 13);
```

**Dark mode**
```css
@media (prefers-color-scheme: dark) {

  :root {
    --text-line-height: 1.7;

    --h1-line-height: 1.2;
    --h2-line-height: 1.2;
    --h3-line-height: 1.2;
    --h4-line-height: 1.2;

    --text-color: hsl(0, 0%, 93%);
    --text-color-chat: hsl(0 0 61);
    --text-color-button: hsl(0 0 100);

    --img-color-light: hsl(0, 0%, 13%);
    --img-color-dark: hsl(0, 0%, 93%);

    --chat-color-background: var(--primary-color);
    --chat-color-icon: var(--text-color);

    --neutral-color-background: hsl(0, 0%, 10%);
    --neutral-color-background-cards: hsl(0, 0%, 13%);
    --neutral-color-background-icons: hsl(0 0 89);
  }
```


## Contributing

<-- Add contributing -->

## License

<-- Add license -->
