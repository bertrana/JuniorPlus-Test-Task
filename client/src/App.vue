<template>
  <div class="layout">
    <header class="layout__header">
      <UiButton
          v-if="hasRouteHistory"
          type="button"
          title="Go back"
          @click="clickBack"
      />
      <UiButton
          v-else
          type="button"
          title="Main page"
          @click="router.push({name: 'MainPage'})"
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
import {useRouter} from "vue-router";
import {computed} from "vue";
import UiButton from "@components/UiButton.vue";

const router = useRouter();
const hasRouteHistory = computed<boolean>(() => window.history.length > 1);

const clickBack = () => {
  router.back();
}
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  gap: 16px;

  max-width: 1280px;
  padding: 0 16px;
}

.layout__header {
  display: flex;
  padding: 8px 0;

  border-bottom: 1px solid #eee;
}
</style>