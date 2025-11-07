# Hospitality Concierge Microsite – Update Guide

This document explains how to update copy, media, and behaviors for the LumaStay Concierge microsite.

## Project Overview
- Framework: Next.js (App Router, TypeScript) in `src/app`.
- UI Composition: Section components with BEM-styled CSS Modules under `src/app/(site)/components`.
- Assets: Custom SVGs live under `public/images`. Add additional assets here and reference them with `/images/...`.
- Aliases: Use `@/` to resolve paths from `src`.

## Updating Content
1. Open `src/app/(site)/components/index.ts` to find the section export you need.
2. Edit the corresponding component (for example, hero copy in `HeroSection/HeroSection.tsx`).
3. Update text directly in the JSX or replace data arrays (e.g., feature lists). Ensure every exported array entry keeps its `id` unique.
4. Maintain accessibility: keep headings hierarchical, update `alt` text when imagery changes, and avoid empty links.
5. Remove unused variables or imports immediately—lint checks will fail if extras remain.

## Updating Imagery & Graphics
1. Place new assets in `public/images`. Prefer SVG for illustrations to keep the aesthetic crisp.
2. Import assets with `next/image` for optimized delivery. Update the `src` property using the `/images/...` path.
3. If you need remote images, allow their domain in `next.config.ts` under the `images.remotePatterns` array.

## Styling Guidelines
- Each component owns a matching `*.module.css` file, using BEM class names (`section-name__element`).
- Add new styles inside that module; avoid inline styles or `!important`.
- Leverage existing CSS variables in `src/app/globals.css` for color and typography consistency.
- Responsive tweaks live inside the same module with media queries scoped to the component.

## Adding New Sections
1. Create a folder inside `src/app/(site)/components` with the component name.
2. Add a `Component.tsx` and `Component.module.css`.
3. Export the component from `src/app/(site)/components/index.ts`, then render it inside `src/app/page.tsx`.
4. Document the component’s purpose with a short comment at the top of the file.

## Verification & Quality Checks
1. Install dependencies if needed: `pnpm install`.
2. Approve native builds (once per environment): `pnpm approve-builds`.
3. Run the quality gate before shipping changes: `pnpm verify`.
4. Resolve any lint or type errors surfaced in the output before committing.

## Useful Scripts
- `pnpm dev` – Runs the local server (developer use only; avoid committing changes while it runs).
- `pnpm build` – Production build preview.
- `pnpm lint` – Linting shortcut if you need a quick check.

Following the above keeps the microsite aligned with the original interactive prototype while ensuring updates remain maintainable and production-ready.

