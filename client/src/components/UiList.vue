<template>
  <div class="ui-list">
    <ul class="ui-list__list">
      <li
          v-for="(item, key) in listItems"
          :key="key"
          class="ui-list__item"
      >
        <slot :item="item"></slot>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { INote } from "../types/notes.ts";

defineProps({
  listItems: Array<INote>,
})
</script>

<style scoped>
.ui-list__list {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 16px;
}
</style>