<script setup lang="ts">
const props = defineProps<{
  matrix: [][] | undefined
}>()
const qrStore = useQrStore()
</script>

<template>
  <div>
    <div v-for="(row, i) in props.matrix" :key="i" class="flex flex-row">
      <QrByte
        v-for="(byte, key) in row"
        :key :round="qrStore.byteRound" :byte="byte" class=""
      />
    </div>
  </div>
</template>
