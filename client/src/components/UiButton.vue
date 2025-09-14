<template>
  <button
      :class="{
          'ui-button': true,
          'ui-button--outlined': isOutlined
      }"
      @click="$emit('click')"
  >
    {{ title }}
  </button>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ title: string, isOutlined?: boolean }>(),{
  title: '',
  isOutlined: false,
})
</script>

<style scoped>
.ui-button {
  padding: 8px;
  border: none;
  background: none;
}

.ui-button:hover {
  cursor: pointer;
  background-color: lightcyan;
}

.ui-button--outlined {
  border: 1px solid lightgray;
  border-radius: 4px;
}
</style>