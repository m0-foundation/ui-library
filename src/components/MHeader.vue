<script setup lang="ts">
import { RouterLink } from 'vue-router'
import logo from '../assets/logo.svg'

interface MenuLink {
  label: string
  to: string
}

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  menuLinks: {
    type: Array as () => MenuLink[],
    default: () => []
  }
})
</script>

<template>
  <header class="bg-white text-black w-full border-b border-b-[#C4D9E866]">
    <div class="grid grid-cols-3 items-center px-6 py-4">
      <!-- Left: Logo -->
      <div class="flex items-center">
        <RouterLink to="/" class="flex items-center space-x-4">
          <slot name="logo">
            <div class="h-12 w-12 bg-black flex items-center justify-center">
              <img :src="logo" alt="M0 Logo" class="h-auto w-[26px]" />
            </div>
          </slot>
          <span v-if="title" class="text-black text-xl font-semibold">{{ title }}</span>
        </RouterLink>
      </div>

      <!-- Center: Navigation -->
      <div class="flex justify-center">
        <nav v-if="menuLinks.length" class="hidden md:flex space-x-6 text-sm">
          <slot name="nav">
            <RouterLink
              v-for="link in menuLinks"
              :key="link.to"
              :to="link.to"
              class="hover:text-gray-300 transition"
            >
              {{ link.label }}
            </RouterLink>
          </slot>
        </nav>
      </div>

      <!-- Right: Slot -->
      <div class="flex justify-end">
        <slot />
      </div>
    </div>
  </header>
</template>
