# Brew Garage

Website for Brew Garage, a craft brewery in East Victoria Park. Built with
Next.js 15 (App Router), React 19, Tailwind CSS 4 and TypeScript.

## Getting started

```bash
yarn install
yarn dev        # http://localhost:3000
```

Other scripts: `yarn build`, `yarn start` (serve the production build),
`yarn lint`, `yarn typecheck`.

To test a production build while `yarn dev` is running, build into a separate
folder so the two do not clash:

```bash
NEXT_DIST_DIR=.next-verify yarn build && NEXT_DIST_DIR=.next-verify yarn start -p 3123
```

## Demoing on a laptop and a phone

The site is fully responsive, so the same URL works on both.

1. Connect the laptop and phone to the same Wi-Fi network.
2. Run `yarn build && yarn start` (or `yarn dev`).
3. Next prints a **Network** address such as `http://192.168.1.20:3000`.
   Open that on the phone. If it doesn't show one, find the laptop's IP with
   `ipconfig getifaddr en0` (macOS).

For a demo that doesn't depend on local Wi-Fi, deploy to Vercel and open the
public URL on both devices.

## Project layout

```
src/
  app/                 routes: / menu contact about merch jobs (+ 404), root layout
  components/
    layout/            site frame: header, desktop nav, mobile menu, footer, image preloader
    ui/                reusable building blocks: hero, section, icons, socials, hours
    home/ menu/ ...    pieces used by one page, in a folder named after it
  data/*.json          page content: menu, jobs, merch, hero photos, home page text
  lib/
    site.ts            business details: address, phone, hours, social links
    navigation.ts      the pages in the nav and footer
    images.ts          every photo, registered for blur-up placeholders
    styles.ts          shared button and heading styles
    fonts.ts           the Khand display font
  types/content.ts     shapes of the data files
public/images/         photos (served resized via next/image)
```

Conventions: file names are kebab-case (`drink-list.tsx`), components are
PascalCase (`DrinkList`), and data fields are camelCase. Colours and fonts are
design tokens in `src/app/globals.css` (`bg-brand`, `text-ink`, `font-display`).

Most content edits only need a change in `src/data/*.json` or `src/lib/site.ts`.
A new photo goes in `public/images` **and** `src/lib/images.ts`.

## Browser support

Tailwind CSS 4 targets modern browsers: Safari 16.4+, Chrome/Edge 111+,
Firefox 128+ (all from 2023 onwards). That covers current iOS and Android.
