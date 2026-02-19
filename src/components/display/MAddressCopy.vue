<template>
  <span class="inline-flex items-center relative font-inter">
    <div class="flex items-center gap-1">
      <div class="hover:underline">
        <a v-if="explorerUrl" :href="explorerUrl" target="_blank">
          {{ shortAddress ? shortenAddress(address) : address }}
        </a>
        <span v-else>
          {{ shortAddress ? shortenAddress(address) : address }}
        </span>
      </div>
      <button
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
import { ref } from 'vue'
import MIconCheck from '../icons/ui/MIconCheck.vue'
import MIconCopy from '../icons/ui/MIconCopyAlt.vue'

export interface MAddressCopyProps {
  address: string
  shortAddress?: boolean
  explorerUrl?: string
}

const props = withDefaults(defineProps<MAddressCopyProps>(), {
  address: '',
  shortAddress: true,
  explorerUrl: undefined,
})

const justCopied = ref(false)

function shortenAddress(address: string): string {
  if (!address || address.length < 10) return address
  return `${address.slice(0, 6)}...${address.slice(-4)}`
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
