<template>
  <div>
    <input
      v-bind="$attrs"
      :value="modelValue"
      :class="['w-full px-4 py-3 border rounded-none bg-white dark:bg-grey-800 dark:border-grey-700 focus:outline-none focus:ring-1 focus:ring-blue-500', { 'border-red-600': hasErrors }]"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
    <div class="text-red-500 text-xs my-1 h-4 font-inter">
      <p v-for="(error, index) of errors" :key="index">
        {{ typeof error === 'string' ? error : error.$message }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Define our own error interface to avoid vuelidate dependency
export interface ValidationError {
  $message: string
  $uid?: string
}

export interface MInputProps {
  errors?: (ValidationError | string)[]
  modelValue: any
}

const props = withDefaults(defineProps<MInputProps>(), {
  errors: () => [],
  modelValue: '',
})

defineEmits(['update:modelValue'])

const hasErrors = computed(() => props.errors && props.errors.length > 0)
</script>

<style scoped>
input {
  @apply bg-transparent;
}
</style>
