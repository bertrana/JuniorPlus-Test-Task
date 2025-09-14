<template>
  <div class="index-page">
    <div class="index-page__controls">
      <UiButton
          type="button"
          title="Add note"
          is-outlined
          @click="clickAddNote"
      />
    </div>

    <div class="index-page__content">
      <p v-if="!notesList.length">
        Nothing
      </p>

      <div v-else class="notes">
        <UiList :list-items="notesList">
          <template v-slot:default="{ item }">
            <UiNotePreview :note-item="item"></UiNotePreview>
          </template>
        </UiList>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
// import { getAllNotes } from "../services/notes.ts";
import UiList from "@components/UiList.vue";
import UiNotePreview from "@components/UiNotePreview.vue";
import type {INote} from "../types/notes.ts";
import UiButton from "@components/UiButton.vue";

const router = useRouter();

const notesList = ref([] as INote[]);

const clickAddNote = () => {
  router.push({ name: 'NotePage', params: { id: 0 } });
}

onMounted(async () => {
  // notesList.value = await getAllNotes();
  notesList.value = [
    {
      id: 123,
      title: "title 1",
      content: "Add note",
    }, {
      id: 234,
      title: "title 2",
      content: "Add note",
    }, {
      id: 345,
      title: "title 3",
      content: "Add note",
    },
  ];
})
</script>

<style scoped>
.index-page__controls {
  display: flex;
  justify-content: end;
  margin-bottom: 16px;
}
</style>