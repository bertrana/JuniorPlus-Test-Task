<template>
  <input
      v-model="modelValue"
      placeholder="Enter a title"
      class="ui-input"
  />
</template>

<script setup lang="ts">
defineModel<string>({ required: true })
</script>

<style scoped>
.ui-input {
  border: none;
}
</style>