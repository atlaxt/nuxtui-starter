<script setup lang="ts">
definePageMeta({
  name: 'home',
})
const authStore = useAuthStore()
</script>

<template>
  <NuxtLayout>
    <div class="flex flex-col gap-24 p-24">
      <ToggleLanguage />
      <ToggleTheme variant="button" />
      <ToggleTheme variant="menu" />

      <UiButton
        label="Logout" @click="() => {
          authStore.logout()
          navigateTo({ name: 'login' })
        }"
      />
    </div>
  </NuxtLayout>
</template>
