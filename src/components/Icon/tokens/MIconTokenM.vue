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
    <g clip-path="url(#clip0_747_54297)">
      <path
        d="M159.5 319C247.589 319 319 247.589 319 159.5C319 71.4106 247.589 0 159.5 0C71.4106 0 0 71.4106 0 159.5C0 247.589 71.4106 319 159.5 319Z"
        fill="black"
      />
      <path
        d="M202.433 184.466H116.568V234.04L159.5 258.827L202.433 234.04V184.466Z"
        fill="white"
      />
      <path
        d="M159.5 258.827L159.5 258.827L202.432 234.04V184.466H159.5V258.827Z"
        fill="#383838"
      />
      <path
        d="M159.5 258.827L159.5 258.827L202.432 234.04V184.466H159.5V258.827Z"
        fill="url(#paint0_linear_747_54297)"
      />
      <path
        d="M159.5 159.68L116.568 184.467L159.5 209.254L202.433 184.467L159.5 159.68Z"
        fill="white"
      />
      <path
        d="M159.5 60.5312L116.568 85.3185L159.5 110.105L202.433 85.3185L159.5 60.5312Z"
        fill="#DFDFDF"
      />
      <path
        d="M159.5 60.5312L116.568 85.3185L159.5 110.105L202.433 85.3185L159.5 60.5312Z"
        fill="url(#paint1_linear_747_54297)"
        fill-opacity="0.2"
      />
      <path
        d="M159.5 159.681L245.365 110.106V209.255L202.433 234.042L202.432 184.468L159.5 209.255V159.681Z"
        fill="#1A1A1A"
      />
      <path
        d="M159.499 159.681L73.6344 110.106V209.255L116.567 234.042L116.567 184.468L159.499 209.255V159.681Z"
        fill="#DFDFDF"
      />
      <path
        d="M159.499 159.681L73.6344 110.106V209.255L116.567 234.042L116.567 184.468L159.499 209.255V159.681Z"
        fill="url(#paint2_linear_747_54297)"
        fill-opacity="0.2"
      />
      <path
        d="M116.567 85.3174L73.6344 110.105L159.5 159.679L245.364 110.105L202.432 85.3174L159.5 110.104L116.567 85.3174Z"
        fill="white"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_747_54297"
        x1="180.966"
        y1="184.466"
        x2="291.3"
        y2="265.886"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#000001" stop-opacity="0" />
        <stop offset="1" stop-color="#000001" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_747_54297"
        x1="159.5"
        y1="60.5313"
        x2="209.338"
        y2="110.369"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-opacity="0" />
        <stop offset="1" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_747_54297"
        x1="92.2485"
        y1="143.995"
        x2="159.499"
        y2="223.556"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-opacity="0" />
        <stop offset="1" />
      </linearGradient>
      <clipPath id="clip0_747_54297">
        <rect width="319" height="319" fill="white" />
      </clipPath>
    </defs>
  </MIcon>
</template>
