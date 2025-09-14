<template>
  <div class="note-page">
    <div class="note-page__header">
      <UiInput
          v-model="data.title"
          class="note-page__title"
      />
      <UiButton
          v-if="!isNewNote"
          title="Delete"
          is-outlined
          @click="clickDeleteButton"
      />
    </div>
    <UiTextarea
        v-model="data.content"
        class="note-page__textarea"
    />
    <UiButton
        title="Save"
        is-outlined
        @click="clickSaveButton"
    />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import {computed, onMounted, reactive, ref, watch} from "vue";
import UiButton from "@components/UiButton.vue";
import UiInput from "@components/UiInput.vue";
import UiTextarea from "@components/UiTextarea.vue";
import type {INote} from "../../types/notes.ts";
import {setNewNote} from "../../services/notes.ts";

const route = useRoute();

const data = ref<INote>({
  title: "",
  content: "",
  id: Number(route.params.id),
})

const isNewNote = computed<boolean>(() => data.value.id === 0);

const clickDeleteButton = () => {
  console.log("clickDelete");
}

const clickSaveButton = async () => {
  try {
    const result = await setNewNote(data.value);
    console.log("setNewNode result", result);
  } catch (error) {
    console.log("setNewNode error", error);
  }
}
</script>

<style scoped>
.note-page {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.note-page__header {
  display: flex;
  justify-content: space-between;
  gap: 8px;
}
</style>