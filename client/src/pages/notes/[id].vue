<template>
  note page {{$route.params.id}}
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {computed, onMounted} from "vue";

const route = useRoute();

const noteID = computed(() => Number(route.params.id));

onMounted(() => {
  if (noteID.value === 0) {
    console.log("created new note");
    return;
  }

  console.log("read note");
})
</script>