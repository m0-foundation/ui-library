<script setup lang="ts">
import MIcon from "../_internal/MIcon.vue";
import tokenIcon from "../../../assets/icons/tokens/mantrausd.svg";

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
    <image :href="tokenIcon" width="24" height="24" />
  </MIcon>
</template>
