<script setup lang="ts">
import MIcon from "../MIcon.vue";

defineProps({
  size: {
    type: [String, Number],
    default: 24,
  },
  color: {
    type: String,
    default: "currentColor",
  },
});
</script>

<template>
  <MIcon :size="size" :color="color">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M80.25 40.0103C80.25 62.1016 62.3414 80.0103 40.25 80.0103C18.1586 80.0103 0.25 62.1016 0.25 40.0103C0.25 17.9189 18.1586 0.0102539 40.25 0.0102539C62.3414 0.0102539 80.25 17.9189 80.25 40.0103ZM40.294 27.5837L44.5073 36.437V40.0103H49.8406V35.2103L42.9073 20.8103H37.574L30.6406 35.2103V40.0103H35.974V36.437L40.1873 27.5837H40.294Z" fill="#232323"/>
  </MIcon>
</template>
