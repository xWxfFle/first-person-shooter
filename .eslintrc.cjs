const { configure, presets } = require('eslint-kit')

module.exports = configure({
  allowDebug: process.env.NODE_ENV !== 'production',

  presets: [
    presets.imports(),
    presets.node(),
    presets.prettier(),
    presets.typescript(),
    presets.react(),
  ],
  extend: {
    rules: {
      'react/no-unknown-property': 'off',
    },
  },
})
