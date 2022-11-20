import type { APODResponse } from './types';
import axios from 'axios';

export async function getAPOD(): Promise<APODResponse> {
  const { data } = await axios.get('/planetary/apod');
  return data;
}
