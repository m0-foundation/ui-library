<script setup lang="ts">
import iconUrl from '../../../assets/icons/tokens/usdt0.webp'

defineProps<{
  size?: string | number
  alt?: string
}>()
</script>

<template>
  <img :src="iconUrl" :width="size ?? 24" :height="size ?? 24" :alt="alt || 'USDt0'" class="rounded-full" />
</template>
