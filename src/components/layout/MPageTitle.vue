<template>
  <div :class="props.containerClass">
    <div class="flex justify-between gap-8 py-2 lg:py-2 mb-5">
      <div>
        <div class="min-h-[20px] mb-2 text-sm">
          <slot name="pretitle" />
        </div>
        <h1 class="text-[28px] lg:text-[32px] font-medium my-2 text-gray-900">
          <span v-if="title">{{ title }}</span>
          <slot v-else name="title" />
        </h1>
        <div class="text-base text-gray-600">
          <slot name="subtitle" />
        </div>
      </div>
      <div class="flex-box">
        <slot name="top-right" />
      </div>
    </div>
    <slot />

    <div>
      <div class="flex justify-between gap-8">
        <slot name="bottom-left" />
        <slot name="bottom-right" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      title?: string
      containerClass?: string
    }>(),
    {
      title: '',
      containerClass: '',
    },
  )
</script>
