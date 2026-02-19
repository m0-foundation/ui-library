<template>
  <div>
    <textarea
      v-bind="$attrs"
      :value="modelValue"
      :class="['w-full px-4 py-3 border rounded-none bg-white dark:bg-grey-800 dark:border-grey-700 focus:outline-none focus:ring-1 focus:ring-blue-500 min-h-[120px]', { 'border-red-500': hasErrors }]"
      @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)" />
    <p
      v-for="(error, index) of errors"
      :key="index"
      class="text-red-500 text-xs my-2">
      {{ typeof error === 'string' ? error : error.$message }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Define our own error interface to avoid vuelidate dependency
export interface ValidationError {
  $message: string
  $uid?: string
}

export interface MTextareaProps {
  errors?: (ValidationError | string)[]
  modelValue?: string
}

const props = withDefaults(defineProps<MTextareaProps>(), {
  errors: () => [],
  modelValue: '',
})

defineEmits(['update:modelValue'])

const hasErrors = computed(() => props.errors && props.errors.length > 0)
</script>

<style scoped>
textarea {
  @apply bg-transparent;
}
</style>
