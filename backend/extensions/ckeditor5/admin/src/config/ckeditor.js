// https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/configuration.html
// https://github.com/Roslovets-Inc/ckeditor5-build-strapi-wysiwyg/blob/e259d72cfc611a0f03aaa7686865412f421fc49c/src/ckeditor.js#L78

import sanitizeHtml from 'sanitize-html';

module.exports = {
  // Override toolbar config to leave a few buttons
  language: 'ru',
};