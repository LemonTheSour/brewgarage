# Architecture decisions and sources

Why the code is structured the way it is, and the official guidance each
decision follows. Sources were checked on 14 November 2026 (Next.js 15.5,
Tailwind CSS 4).

## Structure

| Decision | Source |
| --- | --- |
| Code lives in `src/`; `app/` holds only routes. Shared code sits in `components/`, `lib/`, `data/` and `types/`. Components used by one page go in a folder named after that page. | Next.js says it is unopinionated about project organisation. It lists keeping files outside `app` and splitting by feature or route as valid strategies, and supports an optional `src` folder. Its advice is to pick one strategy and be consistent. [Next.js: Project structure](https://nextjs.org/docs/app/getting-started/project-structure) |
| Kebab-case file names, PascalCase component names. | Next.js gives no naming rule; folder names like `components` and `lib` have no special meaning to it. This is a team convention, chosen for consistency (see above). |
| `"use client"` only on the small interactive pieces (`DesktopNav`, `MobileMenu`, `Carousel`, `ContactForm`, `PreloadImages`). `Header` and every page stay Server Components. | Next.js recommends adding `"use client"` to the files that define interactive components, not to large parts of the UI, because everything a client file imports goes into the browser bundle. [Next.js: Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components) |
| Page titles use `title.template` (`%s \| Brew Garage`) in the root layout. Each page exports a static `metadata` object with its own title and description. | Static `metadata` exported from a layout or page, `title.template` with a required `title.default`. Metadata only works in Server Components. [Next.js: Metadata](https://nextjs.org/docs/app/getting-started/metadata-and-og-images), [generateMetadata reference](https://nextjs.org/docs/app/api-reference/functions/generate-metadata) |

## Search and sharing

| Decision | Source |
| --- | --- |
| Icons use Next.js file conventions: `app/favicon.ico`, `app/icon.png`, `app/apple-icon.png`, and `app/manifest.ts` for the web app manifest. | Next.js metadata file conventions; Next adds the `<link>` tags automatically. |
| Every page builds its metadata with `pageMetadata()` (`src/lib/metadata.ts`): title, description, canonical URL, Open Graph and X card, all with the share image. | Next.js shallow-merges `openGraph`, so a page that sets its own Open Graph details stops inheriting the root share image. Tested: without the helper, only the home page had `og:image`. |
| `metadataBase` comes from `NEXT_PUBLIC_SITE_URL`, falling back to Vercel's production URL. `sitemap.ts` and `robots.ts` generate `/sitemap.xml` and `/robots.txt`; preview deployments are disallowed. | [Next.js: generateMetadata reference](https://nextjs.org/docs/app/api-reference/functions/generate-metadata) |
| schema.org `Brewery` JSON-LD in the root layout, with address, opening hours, phone and menu, built from `src/lib/site.ts`. | Structured data for local businesses; `<` is escaped so the JSON can't break out of its script tag. |

## Images

| Decision | Source |
| --- | --- |
| Photos are static imports (`src/lib/images.ts`) so `placeholder="blur"` works with no extra setup. | `blurDataURL` is added automatically when `src` is a static import of a jpg, png, webp or avif. [Next.js: Image](https://nextjs.org/docs/app/api-reference/components/image) |
| `fill` images sit in a `relative` parent and always pass `sizes`. | `fill` needs a positioned parent; without `sizes` the browser assumes the image is `100vw` wide. Same page. |
| Each page's hero photo is preloaded in the background using `getImageProps`. | `getImageProps` returns the props the `<img>` would get, for use elsewhere. It can't be used with `placeholder`, so the preloader doesn't pass one. Same page. |
| Heroes use `priority`. | Correct for Next.js 15. From Next.js 16, `priority` is deprecated in favour of `preload` (or `loading="eager"` / `fetchPriority="high"`); change this when upgrading. Same page. |

## Styling

| Decision | Source |
| --- | --- |
| Brand colours and the display font are design tokens in `@theme` (`--color-brand`, `--color-ink`, `--color-paper`, `--font-display`), which create utilities like `bg-brand` and `font-display`. | [Tailwind CSS: Theme variables](https://tailwindcss.com/docs/theme) |
| Repeated class strings (buttons, panel headings) live in `src/lib/styles.ts`. | Team convention, to keep repeated elements identical. |

## Security

| Decision | Source |
| --- | --- |
| Security headers on every response (`next.config.ts`): Content-Security-Policy (production only), `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy`, `Permissions-Policy`. | Common hardening headers. The CSP allows inline scripts and styles because Next.js needs them without nonces, and it pre-allows `api.emailjs.com` for the contact form. HTTPS and HSTS come from Vercel. |

## Accessibility and HTML

| Decision | Source |
| --- | --- |
| "Skip to content" link as the first focusable element, pointing at `<main id="main">`. | WCAG 2.2 SC 2.4.1 Bypass Blocks (Level A); technique G1, a link at the top of each page to the main content. [Understanding 2.4.1](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html) |
| Mobile menu is a modal dialog: `role="dialog"`, `aria-modal="true"`, an `aria-label`, focus moves to the close button on open and returns to the menu button on close, Escape closes it, and Tab / Shift+Tab wrap inside it. When closed it's `inert`. | [WAI-ARIA APG: Dialog (Modal) pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/); `inert` removes content from focus and the accessibility tree: [MDN: inert](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/inert) |
| The desktop, mobile and footer navs all have `aria-label="Site"`; the menu page's jump bar is `"Menu sections"`. | Each nav landmark needs a unique label, except navs with the same links, which share one. Labels shouldn't include the word "navigation". [WAI-ARIA APG: Landmark regions](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/) |
| Merch carousel: a `region` with `aria-roledescription="carousel"` and a label; each slide is a `group` with `aria-roledescription="slide"` and a label like "1 of 7"; previous/next are native buttons. | [WAI-ARIA APG: Carousel pattern](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/) |
| Form errors are shown in text, linked to their field with `aria-describedby`, with `aria-invalid` set only after validation. | WCAG 2.2 SC 3.3.1 Error Identification (Level A): [Understanding 3.3.1](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html); [Technique ARIA21](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA21) |
| `<address>` holds only contact details; its heading sits outside it. | `<address>` may not contain headings, sectioning content, `header`, `footer` or another `address`. [MDN: address](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/address) |
| Text colours meet 4.5:1 contrast: `--color-brand-dark` is `#965c08` (5.5:1 on white, 5.0:1 on cream); secondary grey text is at least 70% ink. A branded `:focus-visible` outline on every link and button; animations and smooth scrolling are switched off when the visitor prefers reduced motion. | WCAG 2.2 SC 1.4.3 Contrast (Minimum), SC 2.4.7 Focus Visible; the `prefers-reduced-motion` media query. Contrast measured with the WCAG relative-luminance formula. |
| Opening hours are a `<dl>` with each day/time pair wrapped in a `<div>`. | HTML allows wrapping each name-value group in a `<div>`. [MDN: dl](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dl) |
