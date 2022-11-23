<script setup lang="ts">
interface Emits {
  (e: 'toggle'): void;
}
interface Props {
  toggled: boolean;
}

const emit = defineEmits<Emits>();
const props = withDefaults(defineProps<Props>(), { toggled: false });

const handleClick = () => emit('toggle');
</script>

<template>
  <button type="button" @click="handleClick" class="btn btn-outline-primary">
    <span v-if="props.toggled">Read less</span>
    <span v-else>Read more</span>
  </button>
</template>
