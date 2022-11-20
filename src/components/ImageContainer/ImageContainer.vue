<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { DateTime } from 'luxon';
import { generateSkeletonText } from '@/utils/skeletonContent';

interface Props {
  loading: boolean;
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
});

const shortenedDescription = ref('');
const showFullDescription = ref(false);

watchEffect(
  () => {
    if (props.description && props.description.length > 150) {
      shortenedDescription.value = props.description.substring(0, 150);
    }
  },
  {
    onTrigger() {
      return props.description;
    },
  },
);

const handleSwitchShowFullDescription = () => (showFullDescription.value = !showFullDescription.value);
</script>

<template>
  <div>
    <div class="card m-auto card-content rounded p-md-3">
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
        <img :src="props.src" class="card-img-top image-content" :alt="props.alt" />
        <div class="card-body">
          <h5 class="card-title">{{ props.title }}</h5>
          <p class="card-text text-muted description">
            <span v-if="!showFullDescription">{{ shortenedDescription }}...</span>
            <span v-else>{{ props.description }}</span>
            <a class="ms-3" role="button" @click="handleSwitchShowFullDescription">
              <span v-if="!showFullDescription">Read more</span>
              <span v-else>Read less</span>
            </a>
          </p>
          <div class="text-end">
            <span :v-show="!!props.author" class="mb-0">@{{ props.author }}</span>
            <br />
            <small class="text-muted" :v-show="!!props.date">
              {{ DateTime.fromJSDate(props.date!).toLocaleString(DateTime.DATE_MED) }}
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/scss/ripple';
.card-content {
  max-width: 900px;
  width: 100%;
  border: none;

  .image-content {
    height: 500px;
    width: 100%;
    object-fit: cover;
    object-position: bottom;
  }

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
}
</style>
