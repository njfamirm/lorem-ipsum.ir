import {generateData} from './data.js';

const copyButton = document.querySelector('.copy-button') as HTMLButtonElement;
const textarea = document.querySelector('textarea') as HTMLTextAreaElement;

/**
 * Copy button handler.
 */
function copyLorem(): void {
  const value = textarea.value.trim();
  navigator.clipboard.writeText(value);
}

copyButton.addEventListener('click', copyLorem);

/**
 * Segmented button handler.
 */
function segmentedButtonHandler(buttonList: NodeListOf<HTMLButtonElement>, callback?: () => void | Promise<void>) {
  buttonList.forEach((button) => {
    button.addEventListener('click', async () => {
      buttonList.forEach((button) => button.classList.remove('active'));
      button.classList.add('active');

      await callback?.();
    });
  });
}

/**
 * Generate data based on the selected length and count.
 */
function fillData() {
  const countButtons = document.querySelector('.count-button-container > button.active') as HTMLButtonElement;
  const lengthButtons = document.querySelector('.length-button-container > button.active') as HTMLButtonElement;

  const count = countButtons.value;
  const length = lengthButtons.value as 'word' | 'sentence' | 'paragraph';

  const data = generateData(length, +count);

  textarea.value = data;
}

const countButtons = document.querySelectorAll('.count-button-container > button') as NodeListOf<HTMLButtonElement>;
const lengthButtons = document.querySelectorAll('.length-button-container > button') as NodeListOf<HTMLButtonElement>;

segmentedButtonHandler(countButtons, fillData);
segmentedButtonHandler(lengthButtons, fillData);
