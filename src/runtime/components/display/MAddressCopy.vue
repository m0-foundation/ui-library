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
        <svg v-if="copied" class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <svg v-else class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      </button>
    </div>
  </span>
</template>

<script setup lang="ts">
import { useShortenAddress, useCopyToClipboard } from '../../composables/useAddress'

export interface MAddressCopyProps {
  address: string
  shortAddress?: boolean
  explorerUrl?: string
}

withDefaults(defineProps<MAddressCopyProps>(), {
  address: '',
  shortAddress: true,
  explorerUrl: undefined,
})

const { shortenAddress } = useShortenAddress()
const { copied, copy } = useCopyToClipboard()
</script>
