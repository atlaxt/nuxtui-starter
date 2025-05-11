<script setup lang="ts">
import type { FormSubmitEvent, StepperItem } from '@nuxt/ui'
import type { InferType } from 'yup'
import { object, string } from 'yup'

definePageMeta({
  name: 'register',
  path: '/register',
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

const items = ref<StepperItem[]>([
  {
    title: 'User',
    description: '',
    icon: 'lucide:user',
  },
  {
    title: 'Contact',
    description: '',
    icon: 'lucide:mail',
  },
])
</script>

<template>
  <UiForm :schema="schema" :state="state" class="flex flex-col space-y-4" @submit="onSubmit">
    <UiStepper :items="items" class="w-full" />
    <UiFormField :label="t('user.username')" name="username">
      <UiInput v-model="state.username" size="xl" class="w-full" />
    </UiFormField>

    <UiFormField :label="t('user.password')" name="password">
      <UiInput v-model="state.password" size="xl" class="w-full" type="password" />
    </UiFormField>

    <UiButton trailing-icon="lucide:arrow-right" :label="t('auth.register')" block size="xl" type="submit" />
    <div class="w-full text-center">
      <span class="whitespace-nowrap text-sm"> {{ t('auth.do_you_already_have_an_account') }} <RouterLink :to="{ name: 'login' }" class="font-bold hover:underline">  {{ t('auth.login') }} </RouterLink> </span>
    </div>
  </UiForm>
</template>
