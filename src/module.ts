import { defineNuxtModule, addComponentsDir, addImportsDir, createResolver } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: '@m0-foundation/ui-library',
    configKey: 'm0ui',
  },
  defaults: {},
  async setup(_options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    // Auto-import all components (recursive, already prefixed with M)
    addComponentsDir({
      path: resolve('./runtime/components'),
      prefix: '',
      pathPrefix: false,
    })

    // Auto-import composables
    addImportsDir(resolve('./runtime/composables'))

    // Expose theme CSS path so consumers can @import it in their Tailwind entry
    // e.g. @import "@m0-foundation/ui-library/theme.css";
    // We do NOT push it as nuxt.options.css because @theme directives must be
    // processed inside the same Tailwind compilation as @import "tailwindcss".
  },
})
