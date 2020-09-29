const path = require('path')

module.exports = {
  in: path.resolve(__dirname, 'source'),
  out: path.resolve(__dirname, 'build'),
  assets: {
    in: path.resolve(__dirname, 'source/scripts/index.js')
  },
  themes: {
    development: {
      id: '',
      password: '',
      store: '',
      ignore: [
        'settings_data.json' // leave this here to avoid overriding theme settings on sync
      ]
    },
    production: {
      id: '',
      password: '',
      store: '',
      ignore: [
        'settings_data.json' // leave this here to avoid overriding theme settings on sync
      ]
    }
  }
}
