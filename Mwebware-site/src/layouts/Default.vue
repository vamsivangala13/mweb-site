
<template>
  <div class="home-page">

    <div class="site">
        <div class="wrap container-fluid">
            <header class="site-header nav js-site-navigation is-on-top" id="header-variable">
                <div class="wrap">
                    <div class="row nav__navbar">     
                         <a href="https://www.mwebware.com/">
                         <span class="header__logo is-black">
                            <g-image src="../images/mwebware-logo.svg" alt="mweb Logo" />
                        </span>
                        </a>
                            <div class="nav__btn">
                                <div class="nav__hamburger"></div>
                                <div class="nav__container">
                                    <ul class="nav__list">
                                        <nav>
                                          <g-link class="nav__link" to="/">HOME</g-link>
                                          <g-link class="nav__link" to="/portfolio/portfolio/">PORTFOLIO</g-link>
                                          <g-link class="nav__link" to="/services/services/">SERVICES</g-link>
                                          <g-link class="nav__link" to="/about/">ABOUT</g-link>
                                          <g-link class="nav__link" to="/blog/blog/">BLOG</g-link>
                                          <g-link class="nav__link" to="/contact/contact/">CONTACT</g-link>
                                        </nav>
                                    </ul>
                                 </div>
                             </div>
                     </div>
                </div>
            </header>
        </div>
    </div>    
    <slot/>
   <div class="container-fluid bg-white">
            <footer id="colophon" class="site-footer">
                <div class="row row-gutter16">
                    <div class="container-full footer__row-bordered-lg"></div>
                </div>
                <div class="row row--gutter16 footer__bottom">
                        <div class="col">
                            <p class="footer__copy">
                                © <a href="https://www.mwebware.com/">MWebWare</a>, 2020. All rights reserved
                            </p>
                        </div>
                        <div class="col right">
                            <p class="footer__copy">
                                <a href="privacy-policy/index.html" rel="no-follow">Privacy policy </a>
                                <span class="footer__separator">| </span>
                                <a href="#" rel="no-follow">Terms of service</a>
                            </p>
                        </div>
                    </div>
            </footer>
        </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
