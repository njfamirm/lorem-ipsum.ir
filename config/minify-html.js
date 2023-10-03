const swcHtml = require('@swc/html');

/**
 * @type {import("@swc/html").Options}
 */
const swcHtmlOptions = {
  forceSetHtml5Doctype: true,
  quotes: true,
  collapseWhitespaces: 'smart',
  removeEmptyMetadataElements: true,
  removeComments: true,
  preserveComments: [],
  // removeEmptyAttributes: true,
  // removeRedundantAttributes: true,
  // collapseBooleanAttributes: true,
  normalizeAttributes: true,
  minifyJs: true,
  minifyCss: true,
  sortAttributes: true,
  tagOmission: false,
  selfClosingVoidElements: true,
};

async function minifyHtml(content) {
  if (!this.page.outputPath || !this.page.outputPath.endsWith('.html')) return content;
  try {
    const result = await swcHtml.minify(Buffer.from(content), swcHtmlOptions);
    return result.code;
  } catch (err) {
    console.error('minifyHtml Error: ', err);
    return content;
  }
}

module.exports = {minifyHtml};
