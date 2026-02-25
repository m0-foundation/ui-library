<template>
  <span class="flex items-center gap-1">
    <div v-if="showIcon" class="flex items-center">
      <slot name="icon">
        <div
          v-if="icon"
          class="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
          <img v-if="icon" :src="icon" alt="" class="w-full h-full" />
        </div>
        <div v-else class="w-4 h-4 rounded-full bg-gray-300" />
      </slot>
    </div>

    <a
      v-if="link"
      :href="link"
      target="_blank"
      rel="noopener noreferrer"
      class="hover:underline cursor-pointer"
      :class="{ 'font-semibold': displayName && showName }">
      <span>{{ display }}</span>
    </a>
    <span v-else :class="{ 'font-semibold': displayName && showName }">
      {{ display }}
    </span>

    <button
      v-if="showCopy"
      class="inline-flex items-center justify-center hover:opacity-70 transition-opacity"
      :title="copied ? 'Copied!' : 'Copy address'"
      @click="copy(address)">
      <svg
        v-if="copied"
        class="w-5 h-5 text-green-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 13l4 4L19 7" />
      </svg>
      <svg
        v-else
        class="w-5 h-5 text-gray-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012-2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    </button>

    <span
      v-if="showTag && tag"
      class="px-2 py-0.5 text-xs rounded bg-green-100 text-green-800">
      {{ tag }}
    </span>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useShortenAddress, useCopyToClipboard } from '../../composables/useAddress'

const props = withDefaults(
  defineProps<{
    address?: string
    displayName?: string
    short?: boolean
    showCopy?: boolean
    showIcon?: boolean
    showName?: boolean
    showTag?: boolean
    link?: string
    icon?: string
    tag?: string
  }>(),
  {
    address: '',
    displayName: '',
    short: false,
    showCopy: true,
    showIcon: true,
    showName: true,
    showTag: false,
    link: '',
    icon: '',
    tag: '',
  },
)

const { shortenAddress } = useShortenAddress()
const { copied, copy } = useCopyToClipboard()

const display = computed(() => {
  if (props.displayName && props.showName) return props.displayName
  if (props.short && props.address) {
    return shortenAddress(props.address)
  }
  return props.address
})
</script>
