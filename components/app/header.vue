<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const authStore = useAuthStore()
const { t } = useI18n()
const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: 'Homepage',
      icon: 'i-lucide-house',
      to: { name: 'home' },
    },
    {
      label: 'Installation',
      description: 'Learn how to install and configure Nuxt UI in your application.',
      icon: 'i-lucide-cloud-download',
    },
    {
      label: 'Icons',
      icon: 'i-lucide-smile',
      description: 'You have nothing to do, @nuxt/icon will handle it automatically.',
    },
    {
      label: 'Colors',
      icon: 'i-lucide-swatch-book',
      description: 'Choose a primary and a neutral color from your Tailwind CSS theme.',
    },
    {
      label: 'Theme',
      icon: 'i-lucide-cog',
      description: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.',
    },
  ],
  [
    {
      label: 'GitHub',
      icon: 'i-simple-icons-github',
      to: 'https://github.com/atlaxt/synthia',
      target: '_blank',
    },
    { slot: 'user' },
  ],
])
</script>

<template>
  <header>
    <UiNavigationMenu color="primary" :items="items" class="w-full mx-auto">
      <template #user>
        <UiDropdownMenu
          :items="[{
            label: t('auth.logout'),
            icon: 'lucide:log-out',
            onSelect: () => {
              authStore.logout()
              navigateTo({ name: 'login' })
            },
          }]"
        >
          <div class="flex flex-row gap-2 items-center">
            <UiAvatar size="sm" src="https://avatars.githubusercontent.com/u/137510980?s=96&v=4" />
            <span> {{ authStore.user?.username ?? 'Atlaxt' }} </span>
          </div>
        </UiDropdownMenu>
      </template>
    </UiNavigationMenu>
  </header>
</template>
