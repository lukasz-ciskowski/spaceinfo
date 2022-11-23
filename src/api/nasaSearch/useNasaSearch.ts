import { ref, watch, type Ref } from 'vue';
import { useQuery } from 'vue-query';
import { getSearchResult } from './api';

export function useNasaSearch(q: Ref<string>, page: Ref<number>) {
  const isEnabled = ref(false);
  watch([q, page], () => {
    isEnabled.value = !!q.value.length && page.value > 0;
  });

  return useQuery(['search', q, page], () => getSearchResult(q.value, page.value), {
    enabled: isEnabled,
    staleTime: 3600,
  });
}
