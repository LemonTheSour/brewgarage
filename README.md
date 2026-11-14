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
  app/            routes: / menu contact about merch jobs (+ 404)
  components/     header, footer, hero, section, icons, socials, page parts
  data/*.json     all page content (menu, jobs, merch, hero images, ...)
  lib/site.ts     business details: address, phone, hours, social links, nav
  types/types.ts  shared TypeScript types
public/images/    photos (served resized via next/image)
```

Most content edits only need a change in `src/data/*.json` or `src/lib/site.ts`.

## Browser support

Tailwind CSS 4 targets modern browsers: Safari 16.4+, Chrome/Edge 111+,
Firefox 128+ (all from 2023 onwards). That covers current iOS and Android.
