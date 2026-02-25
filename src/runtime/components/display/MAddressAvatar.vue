<template>
  <span class="inline-flex items-center relative font-inter">
    <div v-if="showAvatar" class="absolute flex items-center">
      <img
        v-if="ensAvatar"
        class="w-4 h-4 rounded-full"
        :src="ensAvatar"
        alt="" />
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
import { useShortenAddress, useAvatarColor, useCopyToClipboard } from '../../composables/useAddress'

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

withDefaults(defineProps<MAddressAvatarProps>(), {
  address: '',
  shortAddress: true,
  showAvatar: true,
  showCopy: false,
  link: true,
  profileUrl: undefined,
  ensName: undefined,
  ensAvatar: undefined,
})

const { shortenAddress } = useShortenAddress()
const { getAvatarColor } = useAvatarColor()
const { copied, copy } = useCopyToClipboard()
</script>
