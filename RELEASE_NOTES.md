# Release Notes

## v1.0.0

Complete rewrite from Vite library mode to Nuxt Module architecture.

### Breaking Changes
- Now a **Nuxt module** — install via `modules` in `nuxt.config.ts` instead of `app.use()`
- Removed generic UI components (MButton, MInput, MModal, etc.) — use [Nuxt UI v4](https://ui.nuxt.com) instead
- Tailwind theme changed from JS preset (v3) to CSS `@theme` (v4) — consumers must `@import` the theme CSS
- Removed `vue-router` peer dependency

### New
- **Auto-imports**: All components and composables are auto-imported, no manual imports needed
- **Nuxt module**: `addComponentsDir` + `addImportsDir` for zero-config integration
- **Tree-shaking**: Per-file ESM output via `@nuxt/module-builder`
- **Fixed icon scaling**: Replaced SVG `<image>` (hardcoded 24x24) with `<img>` tags that scale properly
- **Tailwind v4 theme**: CSS `@theme` block with M0 brand colors, fonts, and design tokens
- **Shared composables**: `useShortenAddress`, `useAvatarColor`, `useCopyToClipboard`
- **TypeScript types**: `TokenName`, `ChainName`, `Wallet` exported from module
- **MModalWeb3Connect**: Fixed event listener leak (replaced `window.addEventListener` with `@click.self`)
- **Playground**: Dev playground app showcasing all components

### Components (33 total)
- 14 token icons
- 11 chain icons
- 4 brand icons (M, wM, POWER, ZERO)
- 1 compound icon (MIconCompoundTokenChain)
- 3 address components (MAddressAvatar, MAddressCopy, MAddressDisplay)
- 2 layout components (MHeader, MFooter)
- 1 overlay component (MModalWeb3Connect)
