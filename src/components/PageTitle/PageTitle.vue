<script setup lang="ts">
interface Props {
  title: string;
  description: string;
}

const props = defineProps<Props>();
</script>

<template>
  <h2 class="text-center">{{ props.title }}</h2>
  <p class="text-center">{{ props.description }}</p>
</template>
