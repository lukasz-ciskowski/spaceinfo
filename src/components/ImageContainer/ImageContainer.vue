<script setup lang="ts">
import { ref, toRef, toRefs, watchEffect } from 'vue';
import { DateTime } from 'luxon';
import { generateSkeletonText } from '@/utils/skeletonContent';
import ReadMoreButton from '../ReadMoreButton/ReadMoreButton.vue';
import { useReadMore } from '@/composables/useReadMore';
import { useLoadImage } from '@/composables/useLoadImage';

interface Props {
  loading?: boolean;
  alt: string;
  src?: string;
  title?: string;
  description?: string;
  date?: Date;
  author?: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Untitled',
  description: 'No description provided',
  author: 'unknown',
});

const [description, isFullDescription, handleShortenDescription] = useReadMore(toRef(props, 'description'));
const loadingImage = useLoadImage(toRef(props, 'src'));
</script>

<template>
  <div class="card rounded p-md-3">
    <div v-if="props.loading" class="loading-skeleton">
      <div class="image-content skeleton-el" />
      <div class="card-body">
        <h5 class="card-title">...</h5>
        <p class="card-text" />
        <div class="text-end author-info">
          <span class="skeleton-el">{{ generateSkeletonText({ length: 30 }) }}</span>
          <br />
          <small>{{ generateSkeletonText({ length: 15 }) }}</small>
        </div>
      </div>
    </div>
    <div v-else>
      <div v-if="loadingImage" class="loading-skeleton">
        <div class="image-content skeleton-el" />
      </div>
      <img :src="props.src" v-show="!loadingImage" class="card-img-top image-content" :alt="props.alt" />

      <div class="card-body">
        <h5 class="card-title">{{ props.title }}</h5>
        <p class="card-text text-muted description">
          <span>{{ description }}</span>
        </p>
        <ReadMoreButton v-if="description.length" @toggle="handleShortenDescription" :toggled="isFullDescription" />
        <div class="text-end">
          <span class="mb-0">@{{ props.author }}</span>
          <br />
          <small class="text-muted" :v-show="!!props.date">
            {{ DateTime.fromJSDate(props.date!).toLocaleString(DateTime.DATE_MED) }}
          </small>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/scss/skeleton';

.loading-skeleton {
  .card-text {
    min-height: 50px;
  }
  .author-info {
    span {
      width: 60px;
    }
  }
}

.description {
  text-align: justify;
}
</style>
