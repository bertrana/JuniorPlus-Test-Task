<template>
  <input
      :value="modelValue"
      placeholder="Enter a title"
      class="ui-input"
  />
</template>

<script setup lang="ts">
defineModel()
</script>

<style scoped>
.ui-input {
  border: none;
}
</style>