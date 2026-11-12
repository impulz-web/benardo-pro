This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started


```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

# Benardo Pro

Portfolio and service site for Benard Mulindi, built with Next.js App Router, TypeScript, and Tailwind CSS.

## Frontend foundations

The interface follows a calm, content-first system. Reusable tokens live in `src/app/globals.css`; shared primitives live in `src/components/ui`.

- Use semantic color tokens for surfaces, text, borders, feedback, and accent actions.
- Use the shared `Container`, `SectionHeader`, `Button`, and `Badge` primitives before adding a new pattern.
- Prefer server components. Add a client component only when interaction requires browser state or events.
- Use semantic HTML, visible `:focus-visible` states, meaningful labels, and `prefers-reduced-motion` support.
- Keep spacing, type scale, and content width predictable across breakpoints. Prefer CSS and native HTML over new dependencies.
- Use cards only for meaningful grouping; avoid gradients, decorative effects, and unnecessary animation.

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:5000](http://localhost:5000) in your browser.

## Validation

```bash
npm run lint
npm run build
```

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
