<template>
  <div class="inline-block">
    <input
      v-if="!range"
      type="date"
      :value="formattedValue"
      @input="handleDateInput"
      class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      :class="inputClass" />
    <div v-else class="flex items-center gap-2">
      <input
        type="date"
        :value="formattedStartDate"
        @input="handleStartDateInput"
        class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        :class="inputClass" />
      <span class="text-gray-500">to</span>
      <input
        type="date"
        :value="formattedEndDate"
        @input="handleEndDateInput"
        class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        :class="inputClass" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'

  interface DateRange {
    start: Date | null
    end: Date | null
  }

  const props = withDefaults(
    defineProps<{
      modelValue?: Date | DateRange | null
      range?: boolean
      inputClass?: string
    }>(),
    {
      modelValue: null,
      range: false,
      inputClass: '',
    },
  )

  const emit = defineEmits<{
    'update:modelValue': [value: Date | DateRange | null]
    close: []
  }>()

  const formattedValue = computed(() => {
    if (!props.modelValue || props.range) return ''
    return formatDateForInput(props.modelValue as Date)
  })

  const formattedStartDate = computed(() => {
    if (!props.range || !props.modelValue) return ''
    const range = props.modelValue as DateRange
    return range.start ? formatDateForInput(range.start) : ''
  })

  const formattedEndDate = computed(() => {
    if (!props.range || !props.modelValue) return ''
    const range = props.modelValue as DateRange
    return range.end ? formatDateForInput(range.end) : ''
  })

  function formatDateForInput(date: Date): string {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  function handleDateInput(event: Event) {
    const input = event.target as HTMLInputElement
    const date = input.value ? new Date(input.value) : null
    emit('update:modelValue', date)
    emit('close')
  }

  function handleStartDateInput(event: Event) {
    const input = event.target as HTMLInputElement
    const startDate = input.value ? new Date(input.value) : null
    const currentRange = (props.modelValue as DateRange) || { start: null, end: null }
    emit('update:modelValue', { ...currentRange, start: startDate })
  }

  function handleEndDateInput(event: Event) {
    const input = event.target as HTMLInputElement
    const endDate = input.value ? new Date(input.value) : null
    const currentRange = (props.modelValue as DateRange) || { start: null, end: null }
    emit('update:modelValue', { ...currentRange, end: endDate })
    emit('close')
  }
</script>
