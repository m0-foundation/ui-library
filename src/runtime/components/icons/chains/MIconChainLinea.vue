<script setup lang="ts">
import iconUrl from '../../../assets/icons/chains/linea.webp'

defineProps<{
  size?: string | number
  alt?: string
}>()
</script>

<template>
  <img :src="iconUrl" :width="size ?? 24" :height="size ?? 24" :alt="alt || 'Linea'" class="rounded-full" />
</template>
