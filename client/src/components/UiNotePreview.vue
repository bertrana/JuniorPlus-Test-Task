<template>
  <div class="ui-note-preview">
    <RouterLink :to="`/notes/${noteItem.id}`">
      {{ noteItem.title }}
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import type { INote } from "../types/notes.ts";

withDefaults(defineProps<{ noteItem: INote }>(), {
  noteItem: {
    id: 0,
    title: "default title",
    content: "default content"
  },
});
</script>

<style scoped>
.ui-note-preview {
  padding: 16px;
  background-color: lavenderblush;
  border: 2px solid gray;
  border-radius: 16px;
}
</style>