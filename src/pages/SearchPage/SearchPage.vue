<script setup lang="ts">
import { useNasaSearch } from '@/api/nasaSearch/useNasaSearch';
import ImageContainer from '@/components/ImageContainer/ImageContainer.vue';
import type { SingleSearchItem } from '@/api/nasaSearch/types';
import { reactive, ref, toRef, toRefs } from 'vue';
import { SEARCH_SKELETON_RESPONSE } from './skeletonData';

const searchInput = ref<string>('');

const query = reactive<{ q: string; page: number }>({
  q: '',
  page: 1,
});

const { q, page } = toRefs(query)
const { data, isLoading, isError, isSuccess } = useNasaSearch(q, page);

const handleSubmit = () => {
  if (!!searchInput.value?.length) {
    query.page = 1
    query.q = searchInput.value
  }
};
</script>

<template>
  <div class="container-xxl">
    <form @submit.prevent="handleSubmit">
      <div class="mb-3 m-auto d-flex justify-content-center">
        <input
          type="search"
          class="form-control search-input me-3"
          placeholder="Search for... (e.g. 'Orion')"
          v-model="searchInput"
        />
        <button type="submit" class="btn btn-primary">Search</button>
      </div>
    </form>
    <div v-if="isSuccess && !data?.collection.items.length">
      <h5 class="text-center text-muted mt-5">
        Unfortunately no results were found based on your input. Please try with something else
      </h5>
    </div>
    <div v-if="isError" class="alert alert-danger" role="alert">Failed to get any search data!</div>
    <div v-if="isSuccess" class="mt-4 result-content">
      <masonry-wall
        :items="data?.collection.items || (isLoading ? SEARCH_SKELETON_RESPONSE() : [])"
        :column-width="350"
        :gap="16"
      >
        <template #default="{ item }: { item: SingleSearchItem }">
          <ImageContainer
            :loading="isLoading"
            :src="item.links.find((l) => l.rel === 'preview')?.href"
            :title="item.data[0]?.title"
            :description="item.data[0]?.description"
            :author="item.data[0]?.photographer"
            :date="new Date(item.data[0]?.date_created || '')"
            :alt="item.data[0]?.title"
          />
        </template>
      </masonry-wall>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/scss/variables';
.search-input {
  max-width: 500px;
}
.result-content {
  .image-content {
    min-height: 200px;
  }
}
</style>
