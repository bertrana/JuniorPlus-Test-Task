<template>
  <textarea
      v-model="modelValue"
      placeholder="Enter a note"
      class="ui-textarea"
  />
</template>

<script setup lang="ts">
defineModel<string>({ required: true })
</script>

<style scoped>
.ui-textarea {
  min-height: 200px;
  padding: 8px;

  border: 1px solid lightgray;
  border-radius: 8px;
}
</style>
