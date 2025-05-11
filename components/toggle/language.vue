<script setup>
const { locales, setLocale } = useI18n()
</script>

<template>
  <div>
    <button v-for="(locale, key) in locales" :key @click="setLocale(locale.code)">
      {{ locale.name }}
    </button>
    <h1>{{ $t('welcome') }}</h1>
  </div>
</template>
