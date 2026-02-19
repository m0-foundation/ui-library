<template>
  <div>
    <div class="lg:flex justify-between mb-2">
      <div>
        <div>
          <slot name="pretitle" />
          <h2 class="text-2xl lg:text-2xl text-gray-900 mb-1">
            <slot name="title" />
          </h2>
          <p class="text-gray-500 max-sm:text-sm">
            <slot name="description" />
          </p>
          <slot name="subtitle" />
        </div>
      </div>
      <div>
        <slot name="right" />
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
  // No props needed - this is a pure layout component
</script>
