const SAMPLE = '.';

export function generateSkeletonText(options: { length: number }) {
  let res = '';
  for (let i = 0; i < options.length; i++) {
    res += SAMPLE;
  }
  return res;
}
