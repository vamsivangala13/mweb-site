// Import main css
import '~/assets/css/style.css'
import '~/assets/css/about.css'
import '~/assets/css/mweb-styles.css'
import '~/assets/css/portfolio-styles.css'
import '~/assets/css/util.css'
import '~/assets/css/portfolio-styles copy.css'
import $ from 'jquery'
window.$ = window.jQuery = require('jquery')
// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {
  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}