require('../scss/app.scss')

try {
    window._ = require('lodash')
    window.$ = window.jQuery = require('jquery')
    require('bootstrap')
    window.moment = require('moment')
    window.baseUrl = document
        .querySelector('meta[name=base-url]')
        .getAttribute('content')
} catch (e) {
    console.log(e)
}

window.axios = require('axios')

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

window.axios.defaults.withCredentials = true
