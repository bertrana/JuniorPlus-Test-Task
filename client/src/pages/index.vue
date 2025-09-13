<template>
  <RouterLink :to="{ name: 'NotePage', params: { id: 1234 } }"> go to 1234</RouterLink>

  <p v-if="!notesList.length">
    Nothing
  </p>

  <div v-else class="notes">

  </div>

  <button type="button" @click="buttonClick">Add note</button>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { getAllNotes } from "../services/notes.ts";

const router = useRouter();

const notesList = ref([]);

const buttonClick = () => {
  router.push({ name: 'NotePage', params: { id: 0 } });
}

onMounted(async () => {
  notesList.value = await getAllNotes();
})
</script>