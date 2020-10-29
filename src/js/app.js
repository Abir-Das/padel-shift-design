require('../scss/app.scss')
import videojs from 'video.js';

try {
    window._ = require('lodash')
    window.$ = window.jQuery = require('jquery')
    require('bootstrap')
    window.moment = require('moment')
    // window.baseUrl = document
    //     .querySelector('meta[name=base-url]')
    //     .getAttribute('content')

    // From Frontend
} catch (e) {
    console.log(e)
}

window.axios = require('axios')

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

window.axios.defaults.withCredentials = true

// Frontend
const homepage_video = videojs(document.querySelector('#homepage-video'), {
	controls: true,
	autoplay: false,
	preload: 'auto',
	fluid: true
});

