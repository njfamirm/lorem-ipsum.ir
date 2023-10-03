const copyButton = document.querySelector('.copy-button') as HTMLButtonElement;
const textarea = document.querySelector('textarea') as HTMLTextAreaElement;

function copyLorem(): void {
  const value = textarea.value.trim();
  navigator.clipboard.writeText(value);
}

copyButton.addEventListener('click', copyLorem);
