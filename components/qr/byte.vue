<script setup lang="ts">
const props = defineProps<{
  byte: 1 | 0
  round?: number
}>()
</script>

<template>
  <div
    class="w-1.5 h-1.5 m-[1px] aniamtion-all duration-300"
    :class="{
      'bg-black': props.byte === 1,
      'bg-white': props.byte === 0,
    }"
    :style="{
      borderRadius: `${props.round}%`,
    }"
  />
</template>
