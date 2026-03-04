<script setup lang="ts">
import iconUrl from '../../../assets/icons/tokens/usdsc.png'

defineProps<{
  size?: string | number
  alt?: string
}>()
</script>

<template>
  <img :src="iconUrl" :width="size ?? 24" :height="size ?? 24" :alt="alt || 'USDsc'" class="rounded-full" />
</template>
