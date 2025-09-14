<template>
  <div class="ui-note-preview">
    <RouterLink :to="`/notes/${noteItem.id}`">
      <div class="ui-note-preview__container">
        <p class="ui-note-preview__title">
          {{ noteItem.title }}
        </p>
      </div>
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
  border: 1px solid lightgray;
  border-radius: 8px;
}
</style>