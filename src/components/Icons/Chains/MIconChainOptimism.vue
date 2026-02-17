<script setup lang="ts">
import MIcon from "../_internal/MIcon.vue";
import chainIcon from "../../../assets/icons/chains/optimism.png";

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
    <image :href="chainIcon" width="24" height="24" />
  </MIcon>
</template>
