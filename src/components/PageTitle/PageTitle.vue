<script setup lang="ts">
interface Props {
  title: string;
  description: string;
}

const props = defineProps<Props>();
</script>

<template>
  <h2>{{ props.title }}</h2>
  <span>{{ props.description }}</span>
</template>
