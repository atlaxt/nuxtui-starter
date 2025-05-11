<script setup>
const { locales, setLocale, locale } = useI18n()
const mounted = ref(false)
onMounted(() => mounted.value = true)
</script>

<template>
  <UiSelectMenu
    v-if="mounted"
    v-model="locale"
    variant="soft"
    class="w-36"
    :search-input="false"
    size="xs"
    :items="locales"
    value-key="code"
    label-key="name"
    @update:model-value="(nw) => setLocale(nw)"
  />
</template>
