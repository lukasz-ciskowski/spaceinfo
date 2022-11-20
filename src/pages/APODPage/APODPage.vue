<script setup lang="ts">
import { useAPOD } from '@/api/APOD/useAPOD';
import ImageContainer from '@/components/ImageContainer/ImageContainer.vue';
import PageTitle from '@/components/PageTitle/PageTitle.vue';

const apodQuery = useAPOD();
</script>

<template>
  <PageTitle
    title="APOD - Astronomy Picture Of The Day"
    description="Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer."
  />
  <div class="mt-3">
    <ImageContainer
      v-if="!apodQuery.isError.value"
      :loading="apodQuery.isLoading.value"
      :src="apodQuery.data.value?.url"
      :title="apodQuery.data.value?.title"
      :description="apodQuery.data.value?.explanation"
      :author="apodQuery.data.value?.copyright"
      :date="new Date(apodQuery.data.value?.date || '')"
      alt="Astronomy Picture Of The Day"
    />
    <div v-else class="alert alert-danger" role="alert">Failed to fetch APOD data!</div>
  </div>
</template>
