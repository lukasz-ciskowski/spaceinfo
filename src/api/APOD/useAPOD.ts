import { useQuery } from 'vue-query';
import { getAPOD } from './api';

export function useAPOD() {
  return useQuery('apod', getAPOD, { staleTime: 3600 });
}
