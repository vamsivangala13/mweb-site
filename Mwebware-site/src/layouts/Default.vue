
<template>
  <div class="home-page">

    <div class="site">
        <div class="wrap container-fluid">
            <header class="site-header nav js-site-navigation is-on-top" id="header-variable">
                <div class="wrap">
                    <div class="row nav__navbar">
                       
                        <div class="nav__wrapper">
                         <a href="https://www.mwebware.com/"><span class="header__logo is-black">
                            <g-image src="../images/mwebware-logo.svg" alt="mweb Logo" />
                        </span></a>
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
                </div>
            </header>
        </div>
        </div>

    
    <slot/>
    <footer>
    &copy;vamsi.v<g-link class="nav__link" to="https://www.mwebware.com">mwebware</g-link>, 2020all rights are reserved
    </footer>
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
