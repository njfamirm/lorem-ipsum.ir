const {readFileSync} = require('node:fs');

async function loadIcon(iconName, customClass = '') {
  let icon;

  try {
    icon = readFileSync(`node_modules/@alwatr/icon-set-material/svg/outline/${iconName}.svg`, 'utf8');
  } catch {
    icon = 'N!';
  }

  return `<div class="h-[1em] w-[1em] box-content align-middle self-center grow-0 shrink-0 [contain:size_layout_paint_style] [&>svg]:block [&>svg]:h-full [&>svg]:w-full [&>svg]:fill-current ${customClass}">${icon}</div>`;
}

module.exports = {loadIcon};
