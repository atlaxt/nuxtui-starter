<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
</script>

<template>
  <UButton
    color="gray"
    variant="link"
    :icon="`heroicons:${isDark ? 'moon' : 'sun'}`"
    @click="colorMode.preference = isDark ? 'light' : 'dark'"
  />
</template>
