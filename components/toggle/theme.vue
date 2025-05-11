<script setup lang="ts">
const props = defineProps<{
  variant: 'button' | 'menu'
}>()
const mounted = ref<boolean>(false)
onMounted(() => mounted.value = true)
</script>

<template>
  <div v-if="mounted">
    <UiButton
      v-if="props.variant === 'button'"
      :icon="isDark ? 'lucide:sun' : 'lucide:moon'"
      variant="link"
      @click="toggleTheme()"
    />
    <UiSelectMenu
      v-else
      class="w-36"
      :model-value="(currentTheme as 'light' | 'dark' | 'system')"
      :search-input="false"
      :items="[{
        label: 'Dark',
        icon: 'lucide:moon',
        id: 'dark',
      }, {
        label: 'Light',
        icon: 'lucide:sun',
        id: 'light',
      }, {
        label: 'System',
        icon: 'lucide:monitor',
        id: 'system',
      }]"
      value-key="id"
      @update:model-value="(nw) => toggleTheme(nw as 'dark' | 'light' | 'system')"
    />
  </div>
  <UiSkeleton v-else />
</template>
