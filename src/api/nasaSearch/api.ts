import axios from 'axios';
import type { SearchResponse } from './types';

export async function getSearchResult(q: string, page: number = 1): Promise<SearchResponse> {
  const { data } = await axios.get(`/search`, { params: { q, page, media_type: 'image' }, baseURL: "https://images-api.nasa.gov" });
  console.log(data);
  
  return data;
}
