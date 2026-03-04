<script setup lang="ts">
import iconUrl from '../../../assets/icons/tokens/usdhl.png'

defineProps<{
  size?: string | number
  alt?: string
}>()
</script>

<template>
  <img :src="iconUrl" :width="size ?? 24" :height="size ?? 24" :alt="alt || 'USDhl'" class="rounded-full" />
</template>
