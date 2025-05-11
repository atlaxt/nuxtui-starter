<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'
import type { InferType } from 'yup'
import { object, string } from 'yup'

definePageMeta({
  name: 'login',
  path: '/login',
})
const authStore = useAuthStore()
const { t } = useI18n()

const schema = object({
  username: string().required('Required'),
  password: string()
    .min(6, 'Must be at least 6 characters')
    .required('Required'),
})

type Schema = InferType<typeof schema>

const state = reactive({
  username: 'atlaxt',
  password: '123456',
})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success', icon: 'lucide:check' })

  authStore.login(event.data)
  navigateTo({ name: 'home' })
}
</script>

<template>
  <UiForm :schema="schema" :state="state" class="flex flex-col space-y-4" @submit="onSubmit">
    <UiFormField :label="t('user.username')" name="username">
      <UiInput v-model="state.username" size="xl" class="w-full" />
    </UiFormField>

    <UiFormField :label="t('user.password')" name="password">
      <UiInput v-model="state.password" size="xl" class="w-full" type="password" />
    </UiFormField>

    <UiButton trailing-icon="lucide:arrow-right" :label="t('auth.login')" block size="xl" type="submit" />
    <UiButton class="mt-6" trailing-icon="logos:google-icon" variant="soft" :label="t('auth.sign_in_with', { provider: 'Google' })" block size="xl" type="submit" />
    <UiButton trailing-icon="logos:facebook" variant="soft" :label="t('auth.sign_in_with', { provider: 'Facebook' })" block size="xl" type="submit" />
    <div class="w-full text-center">
      <span class="whitespace-nowrap text-sm"> {{ t('auth.dont_have_an_account') }} <RouterLink :to="{ name: 'register' }" class="font-bold hover:underline">  {{ t('auth.sign_up_its_free') }} </RouterLink> </span>
    </div>
  </UiForm>
</template>
