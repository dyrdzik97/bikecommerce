## Bikecommerce Bikes Store

<img width="1677" alt="image" src="https://github.com/dyrdzik97/bikecommerce/assets/62518046/56784101-00d7-403a-9833-50e0370ef1be">

## Tech Stack

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Firebase](https://firebase.google.com/)
- [Firestore Database](https://firebase.google.com/docs/firestore?hl=pl)
- [Stripe Payments](https://stripe.com/en-pl)

## MVP features

- [x] Basic features of buiyng and exploring products
- [x] Filters on products listing as positions in menu (all categories mentioned - easily searching)
- [x] Products carousel
- [x] User Panel
- [x] Login, Register
- [x] Creating Account

## Test payment on Stripe

- [Credit card](https://stripe.com/docs/testing#cards)
  - number: 4242 4242 4242 4242
  - expiration date: 12/24
  - CCV: 567
  - user details: John Doe
- Logged users can see their all orders
- For Guest users only available to see order number

## Features to be implemented

- [ ] Product variants
- [ ] Filters
- [ ] User Panel edition
- [ ] Blog
- [ ] Last viewed product carousel

## Happy shopping! 🥳 🛒

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
