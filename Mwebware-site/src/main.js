// Import main css
//import '~/assets/js/jquery.js'
//import '~/assets/js/slick.js'
//import '~/assets/js/main.js'
import '~/assets/css/style.css'
import '~/assets/css/about.css'
import '~/assets/css/mweb-styles.css'
import '~/assets/css/portfolio-styles.css'
import '~/assets/css/util.css'
import '~/assets/css/portfolio-styles copy.css'
import '~/assets/css/mweb-services-styles.css'
//import $ from 'jquery'
//window.$ = window.jQuery = require('jquery')
//var $ = require('jQuery')
// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {
  head.script.push({ src: '/assets/js/jquery.js' })
  head.script.push({ src: '/assets/js/main.js' })
  head.script.push({ src: '/assets/js/slick.js' })
  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}