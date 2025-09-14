<template>
  <div class="layout">
    <header class="layout__header">
      <UiButton
          type="button"
          title="Go back"
          @click="clickBack"
      />
    </header>

    <main class="layout__main">
      <RouterView />
    </main>

    <footer class="layout__footer">
      <p>Made by Lobashevskaya Valentina</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
// import {useRouter} from "vue-router";

// const router = useRouter();

import UiButton from "@components/UiButton.vue";

const clickBack = () => {
  console.log("clickBack");
}
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  gap: 32px;

  max-width: 100%;
  padding: 0 16px;
}

.layout__header {
  display: flex;
  padding: 8px 0;
}
</style>