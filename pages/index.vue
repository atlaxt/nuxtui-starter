<script setup lang="ts">
definePageMeta({
  name: 'home',
})
</script>

<template>
  <NuxtLayout>
    <div class="flex flex-col gap-24 p-24">
      <ToggleLanguage />
      <ToggleTheme variant="button" />
      <ToggleTheme variant="menu" />
    </div>
  </NuxtLayout>
</template>
