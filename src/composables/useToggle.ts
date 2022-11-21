import { ref, type Ref } from 'vue';

export function useToggle(): [Ref<boolean>, () => void] {
  const toggle = ref(false);

  const handleToggle = () => {
    toggle.value = !toggle.value;
  };

  return [toggle, handleToggle];
}
