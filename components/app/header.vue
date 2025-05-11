<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const authStore = useAuthStore()
const runtimeConfig = useRuntimeConfig()
const { t } = useI18n()
const items = computed<NavigationMenuItem[][]>(() => [
  [
    { slot: 'logo' },
  ],
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
const isOpen = ref<boolean>(false)
</script>

<template>
  <header class="w-full dark:bg-secondary-950/75 bg-secondary-50/75 h-14 shadow-lg">
    <UiNavigationMenu :items="items" variant="link" class="md:flex hidden max-w-6xl mx-auto">
      <template #logo>
        <div class="flex items-center flex-row gap-2 h-full">
          <img src="../../assets/logo.png" class="h-6">
          <div class="text-xl font-semibold tracking-tight text-balance bg-gradient-to-r from-primary-500 to-indigo-500 bg-clip-text text-transparent">
            <label> {{ runtimeConfig.public.appName }} </label>
          </div>
        </div>
      </template>

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
                disabled: true,
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

    <div class="md:hidden flex w-full justify-between items-center h-full px-4">
      <div class="flex items-center flex-row gap-2 h-full">
        <img src="../../assets/logo.png" class="h-6">
        <div class="text-xl font-semibold tracking-tight text-balance bg-gradient-to-r from-primary-500 to-indigo-500 bg-clip-text text-transparent">
          <label> {{ runtimeConfig.public.appName }} </label>
        </div>
      </div>
      <div class="flex flex-row gap-2 items-center">
        <ToggleTheme variant="button" />

        <UiSlideover v-model:open="isOpen">
          <UiButton color="neutral" icon="lucide:menu" variant="link" />

          <template #content>
            <UiNavigationMenu orientation="vertical" :items="items" variant="link" class="w-full">
              <template #logo>
                <div class="w-full flex justify-between items-center">
                  <div class="flex items-center flex-row gap-2 h-full">
                    <img src="../../assets/logo.png" class="h-6">
                    <div class="text-xl font-semibold tracking-tight text-balance bg-gradient-to-r from-primary-500 to-indigo-500 bg-clip-text text-transparent">
                      <label> {{ runtimeConfig.public.appName }} </label>
                    </div>
                  </div>
                  <UiButton icon="lucide:x" color="neutral" variant="link" @click="isOpen = false" />
                </div>
              </template>

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
                        disabled: true,
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
          </template>
        </UiSlideover>
      </div>
    </div>

    <slot />
  </header>
</template>
