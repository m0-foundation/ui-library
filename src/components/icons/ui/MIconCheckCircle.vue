<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" :fill="props.circleFill" />
    <path
      d="M8 12L11 15L17 9"
      :stroke="props.checkColor"
      stroke-width="1.5"
      stroke-linecap="round" />
  </svg>
</template>

<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      circleFill?: string
      checkColor?: string
    }>(),
    {
      circleFill: '#24A147',
      checkColor: 'white',
    },
  )
</script>
