<script setup lang="ts">
import { useEarth } from '@/api/Earth/useEarth';
import ImageContainer from '@/components/ImageContainer/ImageContainer.vue';
import PageTitle from '@/components/PageTitle/PageTitle.vue';

const earthQuery = useEarth();
</script>

<template>
  <PageTitle
    title="APOD - Astronomy Picture Of The Day"
    description="Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer."
  />
  <div class="mt-3">
    <ImageContainer
      v-if="!earthQuery.isError.value"
      :loading="earthQuery.isLoading.value"
      :src="earthQuery.data.value?.url"
      :title="earthQuery.data.value?.title"
      :description="earthQuery.data.value?.explanation"
      :author="earthQuery.data.value?.copyright"
      :date="new Date(earthQuery.data.value?.date || '')"
      alt="Astronomy Picture Of The Day"
    />
    <div v-else class="alert alert-danger" role="alert">Failed to fetch APOD data!</div>
  </div>
</template>
