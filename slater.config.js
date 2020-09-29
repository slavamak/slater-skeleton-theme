const path = require('path')

module.exports = {
  in: '/source',
  alias: {
    components: './source/scripts/components'
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
