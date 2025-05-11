<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
useHead({
  title: `${runtimeConfig.public.appName} Template`,
})
</script>

<template>
  <UiApp>
    <NuxtPage />
  </UiApp>
</template>

<style>
div {
    font-family: Poppins, sans-serif;
}
</style>
