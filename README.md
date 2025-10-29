# sv

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
