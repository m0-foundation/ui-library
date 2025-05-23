# M0 Foundation UI Library

Vue 3 component library built with Tailwind CSS.

## Installation

```bash
npm install @m0-foundation/ui-library
```

## Peer Dependencies

This library requires `vue-router` to be installed in your project:

```sh
pnpm add vue-router
# or
yarn add vue-router
# or
npm install vue-router
```

## Usage

### 1. Configure Tailwind CSS

In your project's `tailwind.config.js`:

```js
const m0Preset = require('@m0-foundation/ui-library/tailwind.preset')

module.exports = {
  presets: [m0Preset],
  // Your custom configuration
  theme: {
    extend: {
      // Override default colors if needed
      colors: {
        primary: colors.blue, // or any other color
        secondary: colors.gray,
      }
    }
  }
}
```

### 2. Import Components

#### Global Registration

```js
import { createApp } from 'vue'
import M0UI from '@m0-foundation/ui-library'
import App from './App.vue'

const app = createApp(App)
app.use(M0UI)
app.mount('#app')
```

#### Individual Components

```vue
<script setup>
import { MHeader, MFooter } from '@m0-foundation/ui-library'
</script>

<template>
  <MHeader>
    <template #logo>
      <img src="logo.png" alt="Logo" />
    </template>
    <template #navigation>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </template>
  </MHeader>

  <main>
    <!-- Your content -->
  </main>

  <MFooter>
    <template #column1>
      <h3>Custom Column 1</h3>
      <p>Custom content</p>
    </template>
  </MFooter>
</template>
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build library
npm run build
```

## License

MIT 