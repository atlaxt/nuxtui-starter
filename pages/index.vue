<script setup lang="ts">
import { QrCode } from '#components'

definePageMeta({
  name: 'home',
})

const qrStore = useQrStore()
const startValue = ref<string>('https://qr.atlasyigitaydin.com/')
const animationSpeed = 80

function animateInputValue() {
  qrStore.input = ''
  let index = 0

  function addNextCharacter() {
    qrStore.generateQRCode()
    if (index < startValue.value.length) {
      qrStore.input += startValue.value[index]
      index++
      setTimeout(addNextCharacter, animationSpeed)
    }
    else {
      qrStore.generateQRCode()
    }
  }

  addNextCharacter()
}

onMounted(() => {
  animateInputValue()
})
</script>

<template>
  <NuxtLayout>
    <div class="lg:w-96 flex flex-col h-full justify-start gap-16 py-16 items-center relative">
      <ChangeTheme class="absolute mt-2 top-0 right-0" />

      <div class="w-[256px] flex h-[256px] items-center justify-center">
        <Transition>
          <QrCode v-if="qrStore.qrMatrix" :matrix="qrStore.qrMatrix" />
        </Transition>
      </div>

      <UInput
        v-model="qrStore.input"
        class="w-96 border-b dark:border-gray-500 border-gray-400"
        color="white"
        variant="none"
        @update:model-value="(nw: string) => {
          qrStore.generateQRCode()
          if (nw.length === 0){
            qrStore.qrMatrix = undefined
            qrStore.qrImage = undefined
          }
        }"
      />

      <URange
        v-model="qrStore.byteRound"
        color="gray"
        :max="100"
        :step="1"
        size="sm"
      />
    </div>

    <a class="fixed bottom-0" target="_blank" href="https://github.com/atlasyigitaydin/stars">
      <UButton
        label="atlasyigitaydin"
        color="gray"
        size="sm" variant="link" icon="mdi:github"
      />
    </a>
  </NuxtLayout>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
