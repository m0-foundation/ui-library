<script setup lang="ts">
import iconUrl from '../../../assets/icons/tokens/fallback_token.svg'

defineProps<{
  size?: string | number
  alt?: string
}>()
</script>

<template>
  <img :src="iconUrl" :width="size ?? 24" :height="size ?? 24" :alt="alt || 'Token'" class="rounded-full" />
</template>
