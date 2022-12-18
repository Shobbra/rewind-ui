const plugin = require('tailwindcss/plugin');

const { Button } = require('./components/button');

const components = [Button];

// TODO: add variants, colors, etc.
module.exports = plugin(function ({ addComponents }) {
  addComponents(components.map((com) => com()));
});
