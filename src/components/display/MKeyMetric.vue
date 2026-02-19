<template>
  <div>
    <div>
      <div v-if="title" class="flex items-center gap-2">
        <div v-if="decorativeBox" class="h-3 w-3" :class="decorativeBox" />
        <span class="text-base text-gray-900" :class="titleClass">
          {{ title }}
        </span>
        <span
          v-if="tooltip"
          class="inline-flex items-center justify-center w-4 h-4 rounded-full text-gray-500 hover:text-gray-700 cursor-help"
          :title="tooltip">
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke-width="2" />
            <path d="M12 16v-4M12 8h.01" stroke-width="2" stroke-linecap="round" />
          </svg>
        </span>
      </div>
      <div v-else class="text-gray-900 min-h-6">
        <slot name="title">-</slot>
      </div>
    </div>

    <div class="mt-1">
      <div v-if="loading" class="h-8 bg-gray-200 animate-pulse rounded" />
      <div v-else class="flex items-end gap-2">
        <slot name="icon" />
        <span>
          <span class="text-xl text-gray-900 font-medium">
            <template v-if="value !== null && value !== undefined">
              <span v-if="valuePrefix">{{ valuePrefix }}</span>
              <span>{{ value }}</span>
              <span v-if="valueSuffix">{{ valueSuffix }}</span>
            </template>
            <template v-else>
              <span>-</span>
            </template>
          </span>
        </span>
      </div>
    </div>

    <div class="text-xs text-gray-600">
      <span v-if="description">{{ description }}</span>
      <slot v-else name="description" />
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      decorativeBox?: string
      description?: string
      loading?: boolean
      title?: string
      tooltip?: string
      value?: number | bigint | string | null
      valuePrefix?: string
      valueSuffix?: string
      titleClass?: string
    }>(),
    {
      decorativeBox: '',
      description: '',
      loading: false,
      title: '',
      tooltip: '',
      value: null,
      valuePrefix: '',
      valueSuffix: '',
      titleClass: '',
    },
  )
</script>
