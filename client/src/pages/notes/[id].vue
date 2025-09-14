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
import {useRoute, useRouter} from "vue-router";
import {computed, onMounted, ref} from "vue";
import UiButton from "@components/UiButton.vue";
import UiInput from "@components/UiInput.vue";
import UiTextarea from "@components/UiTextarea.vue";
import type {INote} from "../../types/notes.ts";
import {deleteNote, getNote, setEditedNote, setNewNote} from "../../services/notes.ts";

const route = useRoute();
const router = useRouter();

const data = ref<INote>({
  title: "",
  content: "",
  id: Number(route.params.id),
})

const isNewNote = computed<boolean>(() => data.value.id === 0);

const clickDeleteButton = async () => {
  try {
    await deleteNote(route.params.id);
    router.replace("/");

    if (result.status === 200) {
      window.alert("Note saved successfully.");
    } else {
      window.alert("Error while saving note");
    }
  } catch (error) {
    window.alert("Error while saving note");
  }
}

const sendData = async () => {
  if (!isNewNote.value) {
    return await setEditedNote(data.value)
  }
  return await setNewNote(data.value)
}

const clickSaveButton = async () => {
  try {
    const result = await sendData();
    router.replace("/");

    if (result.status === 200) {
      window.alert("Note saved successfully.");
    } else {
      window.alert("Error while saving note");
    }
  } catch (error) {
    window.alert("Error while saving note");
  }
}

onMounted(async() => {
  if (isNewNote.value) {
    return ;
  }

  try {
    const result = await getNote(route.params.id);

    if (result.status === 200) {
      data.value = result.data
    }
  } catch (error) {
    data.value = 0;
    console.log(error)
  }
})
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