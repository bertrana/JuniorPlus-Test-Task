<template>
  <textarea
      :value="modelValue"
      placeholder="Enter a note"
      class="ui-textarea"
  />
</template>

<script setup lang="ts">
import { onMounted } from "vue";

const modelValue = defineModel<string>();

onMounted(() => {
  console.log(modelValue.value);
})
</script>

<style scoped>
.ui-textarea {
  min-height: 200px;
  padding: 8px;

  border: 1px solid lightgray;
  border-radius: 8px;
}
</style>
