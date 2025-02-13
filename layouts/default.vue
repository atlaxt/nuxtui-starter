<script setup lang="ts">
</script>

<template>
  <div class="fixed top-0 left-0 w-screen h-screen flex flex-col barlow dark:bg-black">
    <div class="w-full h-full flex justify-center">
      <slot />
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow&display=swap');
.barlow {
  font-family: "Barlow", serif;
}
</style>
