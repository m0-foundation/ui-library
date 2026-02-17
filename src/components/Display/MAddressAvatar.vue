<template>
  <span class="inline-flex items-center relative font-inter">
    <div v-if="showAvatar" class="absolute flex items-center">
      <img
        v-if="ensAvatar"
        class="w-4 h-4 rounded-full"
        :src="ensAvatar"
        alt="" />
      <!-- Simple colored avatar placeholder instead of Jazzicon -->
      <div
        v-else
        class="w-4 h-4 rounded-full"
        :style="{ backgroundColor: getAvatarColor(address) }" />
    </div>
    <div class="flex items-center gap-1" :class="{ 'ml-[22px]': showAvatar }">
      <a
        v-if="link && profileUrl"
        class="hover:underline"
        :href="profileUrl">
        <span v-if="ensName">{{ ensName }}</span>
        <span v-else :title="address">
          {{ shortAddress ? shortenAddress(address) : address }}
        </span>
      </a>
      <span v-else class="leading-tight">
        <span v-if="ensName">{{ ensName }}</span>
        <span v-else :title="address">
          {{ shortAddress ? shortenAddress(address) : address }}
        </span>
      </span>

      <button
        v-if="showCopy"
        type="button"
        class="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
        @click="copy(address)">
        <MIconCheck v-if="justCopied" class="w-4 h-4" />
        <MIconCopy v-else class="w-4 h-4" />
      </button>
    </div>
  </span>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import MIconCheck from '../Icons/UI/MIconCheck.vue'
import MIconCopy from '../Icons/UI/MIconCopyAlt.vue'

export interface MAddressAvatarProps {
  address: string
  shortAddress?: boolean
  showAvatar?: boolean
  showCopy?: boolean
  link?: boolean
  profileUrl?: string
  ensName?: string
  ensAvatar?: string
}

const props = withDefaults(defineProps<MAddressAvatarProps>(), {
  address: '',
  shortAddress: true,
  showAvatar: true,
  showCopy: false,
  link: true,
  profileUrl: undefined,
  ensName: undefined,
  ensAvatar: undefined,
})

const justCopied = ref(false)

function shortenAddress(address: string): string {
  if (!address || address.length < 10) return address
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

function getAvatarColor(address: string): string {
  // Generate a deterministic color based on address
  if (!address) return '#888888'
  let hash = 0
  for (let i = 0; i < address.length; i++) {
    hash = address.charCodeAt(i) + ((hash << 5) - hash)
  }
  const hue = Math.abs(hash % 360)
  return `hsl(${hue}, 65%, 50%)`
}

async function copy(text: string) {
  try {
    await navigator.clipboard.writeText(text)
    justCopied.value = true
    setTimeout(() => {
      justCopied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}
</script>
