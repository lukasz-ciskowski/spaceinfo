import type { SingleSearchItem } from '@/api/nasaSearch/types';

const SKELETON_ITEMS = 10;

export const SEARCH_SKELETON_RESPONSE = (): Array<SingleSearchItem> => {
  return Array(SKELETON_ITEMS).fill({
    data: [],
    links: [],
  });
};
