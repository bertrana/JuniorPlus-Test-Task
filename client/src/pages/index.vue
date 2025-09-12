<template>
  index page
  <RouterLink :to="{ name: 'NotePage', params: { id: 1234 } }"> go to 1234</RouterLink>

  <button type="button" @click="buttonClick">Add note</button>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter();

const buttonClick = () => {
  router.push({ name: 'NotePage', params: { id: 0 } });
}
</script>