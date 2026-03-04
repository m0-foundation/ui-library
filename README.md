# @m0-foundation/ui-library

Nuxt module providing M0-specific UI components: token/chain icons, address display, layout, and Web3 connect.

Built with Tailwind CSS v4 and distributed via `@nuxt/module-builder`.

## Installation

```bash
npm install @m0-foundation/ui-library
```

## Setup

### 1. Register the module

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@m0-foundation/ui-library'],
})
```

### 2. Import the theme in your Tailwind CSS entry

The module ships M0 brand colors, fonts, and design tokens as a Tailwind v4 `@theme` block. Import it in your main CSS file **after** `@import "tailwindcss"`:

```css
/* app/assets/css/main.css */
@import "tailwindcss";
@import "@m0-foundation/ui-library/theme.css";

@source "../node_modules/@m0-foundation/ui-library/dist/runtime/components/";
```

> The `@source` directive tells Tailwind to scan the module's components so that utility classes used inside them (like `bg-grey-1000`) are included in your CSS output.

### 3. Use components

All components are auto-imported. No manual imports needed:

```vue
<template>
  <MHeader title="My App" />

  <MIconCompoundTokenChain token="usdc" chain="ethereum" :size="32" />
  <MAddressCopy address="0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045" />
  <MModalWeb3Connect @connect="onConnect" />

  <MFooter />
</template>
```

## Components

### Token Icons (14)

Raster icons that scale to any size. Used with `MIconCompoundTokenChain` or standalone.

| Component | Token |
|-----------|-------|
| `MIconTokenUsdc` | USDC |
| `MIconTokenUsdai` | USDAi |
| `MIconTokenMusd` | mUSD |
| `MIconTokenUsdPlus` | USD+ |
| `MIconTokenUsdk` | USDK |
| `MIconTokenUsdky` | USDKY |
| `MIconTokenUsdhl` | USDHL |
| `MIconTokenUsdz` | USDZ |
| `MIconTokenMantraUsd` | MANTRA USD |
| `MIconTokenGrid` | GRID |
| `MIconTokenAusd` | aUSD |
| `MIconTokenUsdsc` | USDSC |
| `MIconTokenUsdt0` | USDT0 |
| `MIconTokenWmEth` | wM-ETH |

### Chain Icons (11)

| Component | Chain |
|-----------|-------|
| `MIconChainEthereum` | Ethereum |
| `MIconChainSolana` | Solana |
| `MIconChainArbitrum` | Arbitrum |
| `MIconChainOptimism` | Optimism |
| `MIconChainBase` | Base |
| `MIconChainLinea` | Linea |
| `MIconChainHyperEvm` | HyperEVM |
| `MIconChainBsc` | BSC |
| `MIconChainMantra` | Mantra |
| `MIconChainPlasma` | Plasma |
| `MIconChainSoneium` | Soneium |

### Brand Icons (4)

Inline SVG icons for M0 protocol tokens. Scale to any size.

`MIconTokenM`, `MIconTokenWM`, `MIconTokenPower`, `MIconTokenZero`

### Compound Icon

```vue
<MIconCompoundTokenChain token="usdc" chain="ethereum" :size="40" />
```

Renders a token icon with a chain badge overlay. Accepts `TokenName` and `ChainName` typed props.

### Address Components

| Component | Description |
|-----------|-------------|
| `MAddressAvatar` | Colored avatar circle + shortened address |
| `MAddressCopy` | Shortened address + copy-to-clipboard button |
| `MAddressDisplay` | Avatar + address + optional copy + optional tag |

### Layout

| Component | Description |
|-----------|-------------|
| `MHeader` | App header with M0 logo and title |
| `MFooter` | Footer with social links and legal disclaimer |

### Overlay

| Component | Description |
|-----------|-------------|
| `MModalWeb3Connect` | Wallet connect modal (MetaMask, WalletConnect, Coinbase) |

## Composables

Auto-imported composables extracted from address components:

- `useShortenAddress()` — returns `shortenAddress(address, chars?)`
- `useAvatarColor()` — returns `getAvatarColor(address)` (deterministic HSL)
- `useCopyToClipboard()` — returns `{ copied, copy(text) }`

## Types

```ts
import type { TokenName, ChainName, Wallet } from '@m0-foundation/ui-library'
```

## Theme Tokens

The theme CSS provides Tailwind v4 design tokens:

- **Colors**: `grey-100` to `grey-1000`, `green-100` to `green-1000`, `red-100` to `red-1000`, accent colors, chart colors
- **Fonts**: `font-inter`, `font-ppformula`, `font-mono`

## Development

```bash
# Install dependencies
bun install

# Start playground dev server
bun run dev

# Build module for distribution
bun run build
```

## Architecture

This is a [Nuxt Module](https://nuxt.com/docs/guide/going-further/modules) built with `@nuxt/module-builder`:

```
src/
  module.ts                     # Module definition (auto-imports components + composables)
  runtime/
    components/                 # 33 Vue SFC components
      icons/{tokens,chains,brand}/
      display/
      layout/
      overlay/
    composables/useAddress.ts   # Shared composables
    assets/css/theme.css        # Tailwind v4 @theme tokens
    assets/icons/               # PNG/SVG/WebP icon assets
    types/index.ts              # TokenName, ChainName, Wallet
playground/                     # Dev playground app
```

## License

MIT
