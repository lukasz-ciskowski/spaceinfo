import type { APODResponse } from './types';
import axios from 'axios';

export async function getEarth(): Promise<APODResponse> {
  const { data } = await axios.get('/planetary/earth/imagery');
  return data;
}
