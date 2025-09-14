<template>
  <button class="ui-button" @click="$emit('click')">
    {{ title }}
  </button>
</template>

<script setup lang="ts">
defineProps({
  title: String,
})
</script>

<style scoped>
.ui-button {
  padding: 8px;
  border: none;
  background: none;
}

.ui-button:hover {
  cursor: pointer;
  background-color: lightcyan;
}
</style>