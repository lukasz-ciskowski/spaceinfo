import { ref, watchEffect, type Ref } from 'vue';

export function useLoadImage(url: Ref<string | undefined>) {
  const imageRef = ref(new Image());
  const isLoading = ref(true)

  watchEffect(() => {
    if (url.value) {
        imageRef.value.src = url.value
        imageRef.value.onload = () => {
            isLoading.value = false
        }
    }
  }, { onTrigger: () => url });

  return isLoading
}
