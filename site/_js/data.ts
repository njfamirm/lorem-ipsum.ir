import loremIpsumFa from './data/lorem-ipsum-fa.json';

import type {Lorem} from './type.js';

/**
 * List of available lorem ipsum data.
 */
const lorem: Record<string, Lorem> = {
  default: loremIpsumFa,
};

/**
 * Generate lorem ipsum data.
 */
export function generateData(length: 'word' | 'sentence' | 'paragraph', count: number): string {
  let data = '';
  if (length === 'paragraph') {
    data = lorem.default.paragraph[0] + '\n';
  }
  else if (length === 'sentence') {
    data = lorem.default.sentence[0] + '\n';
  }
  else {
    data = lorem.default.word[0] + ' ';
  }

  return data.repeat(+count).trim();
}
