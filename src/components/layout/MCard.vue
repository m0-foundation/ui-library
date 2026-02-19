<template>
  <div class="shadow-none border-gray-100 border ring-0 rounded-lg bg-white">
    <div
      v-if="$slots.header || props.title"
      class="px-6 pt-6 pb-4"
      :class="headerClass">
      <div class="flex flex-wrap gap-2 justify-between items-top">
        <h2 class="text-xl font-medium text-gray-900 leading-2">
          {{ props.title }}
        </h2>
        <slot name="header-right" />
      </div>
    </div>

    <div class="px-6 py-4" :class="bodyClass">
      <slot />
    </div>

    <div v-if="$slots.footer" class="px-6 pb-6 pt-0" :class="footerClass">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      title?: string
      headerClass?: string
      bodyClass?: string
      footerClass?: string
    }>(),
    {
      title: '',
      headerClass: '',
      bodyClass: '',
      footerClass: '',
    },
  )
</script>
