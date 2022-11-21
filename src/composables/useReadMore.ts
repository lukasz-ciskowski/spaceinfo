import { ref, watchEffect, type Ref } from 'vue';
import { useToggle } from './useToggle';

export function useReadMore(description: Ref<string>, size: number = 150): [Ref<string>, Ref<boolean>, () => void] {
  const [isFullDesc, onShowFullDesc] = useToggle();
  const resultValue = ref('');

  watchEffect(
    () => {
      if (isFullDesc.value) {
        resultValue.value = description.value;
      } else if (description && description.value.length > size) {
        resultValue.value = description.value.substring(0, size) + '...';
      }
    },
    {
      onTrigger() {
        return description && isFullDesc;
      },
    },
  );

  return [resultValue, isFullDesc, onShowFullDesc];
}
