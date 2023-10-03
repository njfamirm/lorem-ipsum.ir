/**
 * Copy button.
 */
const copyButton = document.querySelector('.copy-button') as HTMLButtonElement;
const textarea = document.querySelector('textarea') as HTMLTextAreaElement;

function copyLorem(): void {
  const value = textarea.value.trim();
  navigator.clipboard.writeText(value);
}

copyButton.addEventListener('click', copyLorem);

/**
 * Segmented button.
 */
function segmentedButtonHandler(buttonList: NodeListOf<HTMLButtonElement>, activeClass: string) {
  buttonList.forEach((button) => {
    button.addEventListener('click', () => {
      buttonList.forEach((button) => button.classList.remove(activeClass));
      button.classList.add(activeClass);
    });
  });
}

const countButtons = document.querySelectorAll('.count-button-container > button') as NodeListOf<HTMLButtonElement>;
const lengthButtons = document.querySelectorAll('.length-button-container > button') as NodeListOf<HTMLButtonElement>;
const activeClass = 'active';

segmentedButtonHandler(countButtons, activeClass);
segmentedButtonHandler(lengthButtons, activeClass);
