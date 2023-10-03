import persianLoremIpsum from './data/lorem-ipsum-fa.json';

interface LoremIpsum {
  paragraph: string[];
  sentence: string[];
  word: string[];
}

const loremIpsumFa: LoremIpsum = persianLoremIpsum;

const defaultLorem = loremIpsumFa;

export function generateData(length: 'word' | 'sentence' | 'paragraph', count: number): string {
  let data = '';
  if (length === 'paragraph') {
    data = defaultLorem.paragraph[0] + '\n';
  }
  else if (length === 'sentence') {
    data = defaultLorem.sentence[0] + '\n';
  }
  else {
    data = defaultLorem.word[0] + ' ';
  }

  return data.repeat(+count).trim();
}
