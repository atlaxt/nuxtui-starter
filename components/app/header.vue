<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const authStore = useAuthStore()
const { t } = useI18n()
const items = computed<NavigationMenuItem[][]>(() => [
  [
    {
      label: t('homepage'),
      icon: 'i-lucide-house',
      to: { name: 'home' },
    },

    {
      label: t('frameworks'),
      icon: 'i-lucide-cloud-download',
      to: { name: 'frameworks' },
    },
    {
      label: t('recommend_extensions'),
      icon: 'lucide:puzzle',
      to: { name: 'extensions' },
    },
    {
      label: t('components'),
      icon: 'lucide:component',
      to: 'https://ui.nuxt.com',
      target: '_blank',
    },
  ],
  [
    {
      label: 'GitHub',
      icon: 'i-simple-icons-github',
      to: 'https://github.com/atlaxt/synthia',
      target: '_blank',
    },
    { slot: 'language' },
    { slot: 'theme' },
    { slot: 'user' },
  ],
])

const mounted = ref(false)
onMounted(() => {
  mounted.value = true
})
</script>

<template>
  <header
    class="w-full dark:bg-secondary-950/50 bg-secondary-50/50 shadow-lg transform transition-all duration-700 ease-out"
    :class="mounted ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'"
  >
    <UiNavigationMenu :items="items" variant="link" class="w-6xl mx-auto">
      <template #theme>
        <ToggleTheme size="xs" variant="button" />
      </template>

      <template #language>
        <ToggleLanguage />
      </template>

      <template #user>
        <UiDropdownMenu
          :items="[
            [
              {
                label: t('user.profile'),
                icon: 'lucide:user',
              },
            ],
            [
              {
                label: t('auth.logout'),
                icon: 'lucide:log-out',
                onSelect: () => {
                  authStore.logout()
                  navigateTo({ name: 'login' })
                },
              },
            ],
          ]"
        >
          <div class="flex flex-row gap-2 items-center">
            <UiAvatar size="xs" src="https://avatars.githubusercontent.com/u/137510980?s=96&v=4" />
            <span> {{ authStore.user?.username ?? 'Atlaxt' }} </span>
          </div>
        </UiDropdownMenu>
      </template>
    </UiNavigationMenu>
    <slot />
  </header>
</template>
