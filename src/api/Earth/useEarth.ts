import { useQuery } from 'vue-query';
import { getEarth } from './api';

export function useEarth() {
  return useQuery('earth', getEarth, { staleTime: 3600 });
}
