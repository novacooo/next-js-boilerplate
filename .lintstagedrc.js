const path = require('path');

module.exports = {
  // Lint TypeScript and JavaScript files
  '**/*.{js,jsx,ts,tsx}': (filenames) => {
    return `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`;
  },

  // Lint CSS and SCSS files
  '**/*.{css,scss}': (filenames) => {
    return `stylelint --fix ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`;
  },

  // Format MarkDown, JSON and CSS
  '**/*.{md,json,css,scss}': (filenames) => {
    return `prettier --write ${filenames.join(' ')}`;
  },
};
