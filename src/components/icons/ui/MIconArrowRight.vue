<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18L15 12L9 6" :stroke="props.color" stroke-width="1.5" />
  </svg>
</template>

<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      color?: string
    }>(),
    {
      color: 'currentColor',
    },
  )
</script>
