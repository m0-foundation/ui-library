<script setup lang="ts">
import iconUrl from '../../../assets/icons/tokens/citrea.png'

defineProps<{
  size?: string | number
  alt?: string
}>()
</script>

<template>
  <img :src="iconUrl" :width="size ?? 24" :height="size ?? 24" :alt="alt || 'Citrea'" class="rounded-full" />
</template>
