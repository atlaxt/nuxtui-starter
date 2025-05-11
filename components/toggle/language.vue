<script setup>
const { locales, setLocale, locale } = useI18n()
</script>

<template>
  <UiSelectMenu
    v-model="locale"
    class="w-36"
    :search-input="false"
    :items="locales"
    value-key="code"
    label-key="name"
    @update:model-value="(nw) => setLocale(nw)"
  />
</template>
