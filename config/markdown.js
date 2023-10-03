const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItAttrs = require('markdown-it-attrs');

const slugify = (s) => encodeURIComponent(String(s).trim().toLowerCase().replace(/\s+/g, '-'));

const markdown = markdownIt({
  html: true,
  xhtmlOut: true,
  breaks: true,
  linkify: true,
});

markdown.use(markdownItAnchor, {slugify});
markdown.use(markdownItAttrs);

module.exports = {markdown};
