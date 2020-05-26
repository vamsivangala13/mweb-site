<template>
  <Layout>
        <div class="site-content">
            <div class="content-area">
                 <div class="wrap container-fluid header__bg-blob-block">
                    <div class="header__bg-blob">
                        <g-image src="../images/banner-bg.png" alt="banner background" />
                    </div>
                    <div class="container-full hide-bg-xs overflow-h header__intro">
                        <div class="section wrap header__wrap">
                            <div class="row position-r align-items-c">
                                <!--<div class="dots__big dots__big--header"></div>-->
                                <div class="header__content--lg clmn col-md-6 ">
                                    <h1 class="section__site-title header__heading p0">Let's Build Quality Software For You
                                        <!--<br> -->
                                        <!-- Software for you --> </h1>
                                    <h2 class="section__site-subtitle header__lead">No matter the stage or scope of your project, we can
                                        <br>
                                        supercharge your project with our code.</h2>
                                   
                                    <button class="header__content--cta btn btn__primary estimate__button aos-init aos-animate" data-aos="zoom-in" onclick="location.href='/services/services';">
                                            Learn More →
                                        </button>
                                </div>
                                <div class="clmn col-md-6 header__image-static">
                                    <g-image src="../images/banner-pic.png" alt="MWebWare" />
                                </div>
                            </div>
                            <div class="text-center m-auto">
                                <div class="section__label tWall">Tech Wall</div>
                            </div>
                            <div class="row">
                                <div class="col col-full">
                                    <div class="header__icons header__icons--title">
                                        <div class="col header__ic" id="js-header-logos">
                                            <div class="header__icon">
                                                <g-image src="../images/techwall/aws.svg" alt="aws" />
                                            </div>
                                            <div class="header__icon">
                                                <g-image src="../images/techwall/digitalocean.svg" style="width:120px" alt="fission" />
                                            </div>
                                            <div class="header__icon">
                                                <g-image src="../images/techwall/google-cloud.svg" alt="google-cloud" />
                                            </div>
                                            <div class="header__icon">
                                                <g-image src="../images/techwall/aws-lambda.svg" alt="aws lambda" />
                                            </div>
                                            <div class="header__icon">
                                                <g-image src="../images/techwall/kubernetes.svg" alt="kubernetes" />
                                            </div>
                                            <div class="header__icon">
                                                <g-image src="../images/techwall/microsoft-azure.svg" alt="microsoft azure" />
                                            </div>
                                            <!--<div class="header__icon">
                                                <g-image src="../images/techwall/openstack.svg" alt="openstack" />
                                            </div>-->
                                            <div class="header__icon">
                                                <g-image src="../images/techwall/vm-ware.svg" alt="vm ware" />
                                            </div>
                                            <div class="header__icon">
                                                <g-image src="../images/techwall/docker.svg" alt="docker" />
                                            </div>
                                            <!--<div class="header__icon">
                                                <g-image src="../images/techwall/kvm.svg" alt="kvm" />
                                            </div>-->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 <main id="main" class="home site-main position-r">
                    <div class="possibilities-blob hide-bg-xs"></div>                    
                    <div class="wrap container-fluid">
                        <section class="section row row--gutter16">
                            <div class="col col-full">
                                <div class="row row--gutter16 text-center">
                                    <div class="col col-full col--title">
                                        <h2 class="section__title mt50">Overview</h2>
                                    </div>
                                </div>
                                <div class="projects">
                                    <div class="row row--dots mw100 mt70">
                                        <div class="col projects__photo">
                                            <g-image src="../images/overview.png" alt=""/>
                                        </div>
                                        <!--<div class="col col-1 projects__spacer"></div>-->
                                        <div class="col col-5 center-h">
                                            <div class="row row--gutter16 mw100">
                                                <div class="col col--title projects__title">
                                                    <h2 class="section__title2"><span class="mwebText">M<span>Web</span>Ware</span> is a  software development company with a strong focus on meeting the needs of small to medium  health care entities with commercial and open source software.</h2>
                                                </div>
                                            </div>
                                            <div class="row row--gutter16 mw100">
                                                <div class="col  projects__title_text">
                                                    <p class="f-nunito"><span class="mwebText">M<span>Web</span>Ware</span> is a Silver Spring, MD based software services company with a difference. Started by a team of software professionals who have extensive experience and successful track record in delivering software products and services solutions for all sizes of enterprises. With an office in Hyderabad, India, <span class="mwebText">M<span>Web</span>Ware</span> strives to provide the best of both worlds with Right Sourcing. <span class="mwebText">M<span>Web</span>Ware</span> firmly believes that all projects are not suited for off-shoring. With our expertise, we can offer you the right solution at the right price without any guess work.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class="container-fluid">
                        <section class="section row row--gutter16 projectsdow m-auto pb40">
                            <div class="row m-auto">
                                <div class="col col-full col--title">
                                    <h2 class="section__title mt50">Featured Services</h2>
                                </div>
                            </div>
                            <div class="row projects__content">
                                <div class="col clmn col-md-6 col-xl-4 order-3 order-lg-0 p0">
                                    <div class="projects__each row mtm10 align-items-c aos-init aos-animate" data-aos="fade-up" data-aos-delay="50">
                                        <div class="col text-right">
                                            <p class="projects__title"><a href="services/cloud-computing">Cloud Computing</a></p>
                                        </div>
                                        <div class="col col-3 text-center">
                                            <g-image src="../images/icons/icon_feature_cloud-computing.svg" alt="Cloud Computing"/>
                                        </div>
                                    </div>
                                    <div class="projects__each row mtm10 align-items-c aos-init aos-animate" data-aos="fade-up" data-aos-delay="150">
                                        <div class="col text-right">
                                            <p class="projects__title"><a href="services/devops-services">DevOps services</a></p>

                                        </div>
                                        <div class="col col-3 text-center">
                                            <g-image src="../images/icons/icon_feature_devops.svg" alt="DevOps services"/>
                                        </div>
                                    </div>
                                    <div class="projects__each row mtm10 align-items-c aos-init aos-animate" data-aos="fade-up" data-aos-delay="250">
                                        <div class="col text-right">
                                            <p class="projects__title"><a href="services/artificial-intelligence-data-sciences">Artificial Intelligence & <br>Data Sciences</a></p>

                                        </div>
                                        <div class="col col-3 text-center">
                                            <g-image src="../images/icons/icon_feature_ai-data-sciences.svg" alt="Artificial Intelligence and Data Sciences"/>
                                        </div>
                                    </div>
                                    <div class="projects__each row mtm10 align-items-c aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                                        <div class="col text-right">
                                            <p class="projects__title"><a href="/services/web-application-development">Mobile & Web Application<br>Development</a></p>

                                        </div>
                                        <div class="col col-3 text-center">
                                            <g-image src="../images/icons/icon_feature_mobile-web-app-development.svg" alt="Mobile and Web Application Development"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col clmn col-xl-4">
                                    <div class="center-image-height row mtm10 align-items-c aos-init aos-animate" data-aos="zoom-in-up" data-aos-delay="70">
                                        <g-image src="../images/work-flow.png" alt="work flow" class="m-auto img-fluid"/>
                                    </div>
                                </div>
                                <div class="col clmn col-md-6 col-xl-4 order-4 order-lg-0 p0">
                                    <div class="projects__each row mtm10 align-items-c aos-init aos-animate" data-aos="fade-up" data-aos-delay="350">
                                        <div class="col col-3 text-center">
                                            <g-image src="../images/icons/icon_feature_ui-ux-designing.svg" alt="UI and UX Designing"/>
                                        </div>
                                        <div class="col">
                                            <p class="projects__title"><a href="services/ui-ux-designing">UI/UX Designing</a></p>

                                        </div>
                                    </div>
                                    <div class="projects__each row mtm10 align-items-c aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                                        <div class="col col-3 text-center">
                                            <g-image src="../images/icons/icon_feature_software-testing.svg" alt="Software Testing"/>
                                        </div>
                                        <div class="col">
                                            <p class="projects__title"><a href="services/quality-assurance-services">Quality Assurance services</a></p>

                                        </div>
                                    </div>
                                    <div class="projects__each row mtm10 align-items-c aos-init aos-animate" data-aos="fade-up" data-aos-delay="450">
                                        <div class="col col-3 text-center">
                                            <g-image src="../images/icons/icon_feature_enterprise-business-solitions.svg" alt="Enterprise Business Solutions"/>
                                        </div>
                                        <div class="col">
                                            <p class="projects__title"><a href="services/enterprise-business-solutions">Enterprise Business<br>Solutions</a></p>

                                        </div>
                                    </div>
                                    <div class="projects__each row mtm10 align-items-c aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
                                        <div class="col col-3 text-center">
                                            <g-image src="../images/icons/icon_feature_data-management-integration.svg" alt="Data Management and Integration"/>
                                        </div>
                                        <div class="col">
                                            <p class="projects__title"><a href="services/data-management-integration">Data Management & <br>Integration</a></p>

                                        </div>
                                    </div>
                                </div>
                                <div class="col col-md-12">
                                    <div class="projects__more">
                                        <div class="projects__more-content" id="js-project-content">
                                            <div class="row row--gutter16">
                                                <div class="col col-xl-4">
                                                    <p>Over the years, Angular has become the darling of the developers' community. According to the 2018 Developers Survey by StackOverflow, it’s the most commonly used frontend framework. A framework that was created to introduce best practices of making apps was further perfected by the brilliance of countless Angular developers from around the world. </p>
                                                </div>
                                                <div class="col col-xl-4">
                                                    <p>With all that, it's hardly surprising that Angular developers are prized by the best. And this is precisely why some of the well-known applications are based on this powerful framework. This includes Google's Store or Express services, official websites of Microsoft's top products such as Xbox or Office, and products of Fortune 500 companies (e.g. McDonald's or Cisco). </p>
                                                </div>
                                                <div class="col col-xl-4">
                                                    <p>Every update of the Angular JavaScript framework brings new performance improvements, which allow it to remain a top choice for making blazing fast and feature-rich applications. All that's left is to find Angular developers capable of making full use of this potential. Leave this job to us. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--<div class="row m-auto">
                                <div class="col">
                                    <p>See All Features for 
                                        <a href="#" class="btn btn__primary aos-init aos-animate" data-aos="zoom-in">Click here</a> 
                                    </p>
                                </div>
                            </div>-->
                        </section>
                    </div>
                    <div class="whyus mb-md-100 vCenter why-choose">
                        <div class="row m-auto">
                            <div class="col-md-12">
                                <h2 class="section__title">Creating lasting value for your organization </h2>
                                <a href="/why-mwebware" class="btn btn__primary aos-init aos-animate" data-aos="zoom-in">Click here →</a>
                            </div>
                        </div>
                    </div>
                    <!--<section class="section row row--gutter16 block block__content bg--white block__content--alignCenter" id="home-opensource">
                        <div class="ctn">
                            <div class="block__main">
                                <div class="content">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <h2 class="image--null">We <g-image src="../images/icons/love.svg" alt="Love" scale="0"/> Open Source</h2>
                                            <p class="f-nunito pb20">Built on the industry’s open source standards – OpenStack for VMs, Kubernetes for Containers, and Fission for Serverless functions – Platform9 provides Open Source economics and interoperability, without the vendor lock-in and maintenance/DIY overhead. Learn more about our open source technology and the <a href="#">projects we contribute to</a>.</p>
                                            <a class="btn btn__primary aos-init aos-animate" href="#">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>-->
                    <div class="container-fluid wrap">
                        <section class="section row resources position-r m0">
                            <div class="resources__blob"></div>
                            <div class="container-full resources__image">
                                <div class="position-r">
                                    <div class="wrap container-fluid resources__content">
                                        <div class="row row--gutter16 justify-b">
                                            <div class="col col-xl-4">
                                                <div class="row row--gutter16">
                                                    <div class="col col-full">
                                                        <p class="section__label">Advantage</p>
                                                    </div>
                                                    <div class="col col-full col--title">
                                                        <h2 class="section__title2"><strong>When working with us,</strong> you can expect more</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row row--gutter16 resources__boxes box__list mt50">
                                            <div class="col col-4 mb40">
                                                <div class="box box--dots position-r aos-init aos-animate" data-aos="fade-up" data-aos-delay="50">
                                                    <div class="dc-chip">01</div>
                                                    <div class="row row--gutter16">
                                                        <div class="clmn col box__description">
                                                            <h3 class="box__title">Process</h3>
                                                            <p class="box__content">Our development process is based on agile methodologies like Scrum. With regular project updates, live demos and the best communication tools, we make sure that you’re up-to-date with everything.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col col-4 mb40">
                                                <div class="box box--dots position-r aos-init aos-animate" data-aos="fade-up" data-aos-delay="150">
                                                    <div class="dc-chip">02</div>
                                                    <div class="row row--gutter16">
                                                        <div class="clmn col box__description">
                                                            <h3 class="box__title">Technology</h3>
                                                            <p class="box__content">We’re proud of our technology stack. Instead of covering every framework possible, we excel in technologies which are truly battle-tested: ASP.NET, Node.js, React, Angular, Vue.js, iOS and Android.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col col-4 mb40">
                                                <div class="box box--dots position-r aos-init aos-animate" data-aos="fade-up" data-aos-delay="250">
                                                    <div class="dc-chip">03</div>
                                                    <div class="row row--gutter16">
                                                        <div class="clmn col box__description">
                                                            <h3 class="box__title">Infrastructure</h3>
                                                            <p class="box__content">Every software company can provide you with frontend and backend development. But at <span class="mwebText">M<span>Web</span>Ware</span> we do more than that! Our independent DevOps unit takes care of server architecture – making it stable, secure and scalable.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row row--gutter16 resources__boxes box__list justify-c">
                                            <div class="col col-4 mb40">
                                                <div class="box box--dots position-r aos-init aos-animate" data-aos="fade-up" data-aos-delay="350">
                                                    <div class="dc-chip">04</div>
                                                    <div class="row row--gutter16">
                                                        <div class="clmn col box__description">
                                                            <h3 class="box__title">Quality assurance</h3>
                                                            <p class="box__content">We know that quality assurance is an important part of the development process. This is why, apart from manual tests, we perform automated ones – using our custom E2E testing framework.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col col-4 mb40">
                                                <div class="box box--dots position-r aos-init aos-animate" data-aos="fade-up" data-aos-delay="450">
                                                    <div class="dc-chip">05</div>
                                                    <div class="row row--gutter16">
                                                        <div class="clmn col box__description">
                                                            <h3 class="box__title">People</h3>
                                                            <p class="box__content">Our office is full of brilliant people. Among them are tech evangelists giving lectures at the biggest meetups in Poland and the creators of open-source tools loved by developers around the globe.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class="container-fluid" style="background-color: #f0fafe;">
                        <div class="wrap">
                        <section class="section row row--gutter16">
                            <div class="row experts experts--clients">
                                <div class="clmn col-md-12 col-xl-6">
                                    <div class="row w-100 position-r">
                                        <div class="position-r w-100 aos-init aos-animate" data-aos="fade-right" data-aos-delay="50">
                                            <div class="experts__nav">
                                                <span class="clients__button--left slider__button slider__button--left hide-on-xs"></span>
                                                <span class="clients__button--right slider__button slider__button--right  hide-on-xs"></span>
                                            </div>
                                            
                                            <!--<div class="experts--bg" id="js-experts-bg">
                                                <div class="experts__img-container">
                                                    <div class="experts__img-wrap">
                                                        <g-image src="../assets/images/clients/blob_testimonials.svg" alt=""/>
                                                    </div>
                                                </div>
                                            </div>-->
                                            
                                            <div class="col experts--clients-slider" id="js-clients-slider">
                                                <div class="experts__element experts__element--client">
                                                    <div class="experts__image experts__image--client">
                                                        <g-image srcset="../assets/images/testimonials/1.jpg 1x" src="../assets/images/testimonials/1.jpg" class="experts__image-clip--client"/>
                                                    </div>
                                                    <p class="experts__name">John Wick</p>
                                                    <!--<span class="experts__function">CTO at Synerise</span>-->
                                                    <div class="experts__content experts__content--client">
                                                        <p>We felt like we had a true partner throughout the process. They were assertive when necessary and explained how their recommendations and actions would best meet our needs. They were clearly interested in our long-term success.</p>
                                                    </div>
                                                </div>
                                                <div class="experts__element experts__element--client">
                                                    <div class="experts__image experts__image--client">
                                                        <g-image srcset="../assets/images/testimonials/2.jpg 1x" src="../assets/images/testimonials/2.jpg" class="experts__image-clip--client"/>
                                                    </div>
                                                    <p class="experts__name">Matthew Randton</p>
                                                    <!--<span class="experts__function">Technical Director at Newhope</span>-->
                                                    <div class="experts__content experts__content--client">
                                                        <p>A year after the initial build began, Worldwide101 has doubled its turnover and increased its team by 50%. The system is worth at least triple what it cost to build, and we believe that its value will continue to grow even as its costs are amortized.</p>
                                                    </div>
                                                </div>
                                                <div class="experts__element experts__element--client">
                                                    <div class="experts__image experts__image--client">
                                                        <g-image srcset="../assets/images/testimonials/1.jpg 1x" src="../assets/images/testimonials/1.jpg" class="experts__image-clip--client"/>
                                                    </div>
                                                    <p class="experts__name">Daniel Dawson</p>
                                                    <!--<span class="experts__function">Development Manager at Smartum</span>-->
                                                    <div class="experts__content experts__content--client">
                                                        <p>Many of the other providers we’ve used had to be babysitted through the projects, but we haven’t had to do this at all with The Software House. We can give them requirements, discuss how to do the work, and have it delivered on time and on budget. When talking about value, they are in a league of their own.</p>
                                                    </div>
                                                </div>
                                                <div class="experts__element experts__element--client">
                                                    <div class="experts__image experts__image--client">
                                                        <g-image srcset="../assets/images/testimonials/2.jpg 1x" src="../assets/images/testimonials/2.jpg" class="experts__image-clip--client"/>
                                                    </div>
                                                    <p class="experts__name">Dutch Gregor</p>
                                                    <!--<span class="experts__function">COO at WieBetaaltWat</span>-->
                                                    <div class="experts__content experts__content--client">
                                                        <p>We had our own team in Amsterdam, but we soon found out that it’s difficult to find the right people locally. That’s why we grew our partnership with The Software House – people who are not only following the tasks, but can work as a team. Together.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="clmn col-md-12 col-xl-6" style="z-index:1;">
                                    <div class="col col-full text-center">
                                        <div class="col col-full col--title">
                                            <h2 class="section__title">Our Clients</h2>
                                        </div>
                                    </div>
                                    <div id="js-clients-logo-slider" class="row row--gutter16 clients">
                                        <div class="clmn col-md-3 col-xl-4">
                                            <g-image srcset="../images/client-logos/acr-logo.png 1x" src="../images/client-logos/acr-logo.png" alt="ACR"/>
                                        </div>
                                        <div class="clmn col-md-3 col-xl-4">
                                            <g-image srcset="../images/client-logos/AIRP-logo.png 1x" src="../images/client-logos/AIRP-logo.png" alt="AIRP"/>
                                        </div>
                                        <div class="clmn col-md-3 col-xl-4">
                                            <g-image srcset="../images/client-logos/sbi-logo.png 1x" src="../images/client-logos/sbi-logo.png" alt="SBI"/>
                                        </div>
                                        <div class="clmn col-md-3 col-xl-4">
                                            <g-image srcset="../images/client-logos/arrslogo.png 1x" src="../images/client-logos/arrslogo.png" alt="ARRS"/>
                                        </div>
                                        <div class="clmn col-md-3 col-xl-4">
                                            <g-image srcset="../images/client-logos/analitycal-logo.png 1x" src="../images/client-logos/analitycal-logo.png" alt="Analitycal"/>
                                        </div>
                                        <div class="clmn col-md-3 col-xl-4">
                                            <g-image srcset="../images/client-logos/govhealth-logo.png 1x" src="../images/client-logos/govhealth-logo.png" alt="Govhealth"/>
                                        </div>
                                        <div class="clmn col-md-3 col-xl-4">
                                            <g-image srcset="../images/client-logos/iyerclinic-logo.png 1x" src="../images/client-logos/iyerclinic-logo.png" alt="Iyer Clinic"/>
                                        </div>
                                        <div class="clmn col-md-3 col-xl-4">
                                            <g-image srcset="../images/client-logos/nhmrg-logo.png 1x" src="../images/client-logos/nhmrg-logo.png" alt="NHMRG"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        </div>
                    </div>
                    <div class="container-fluid achBlock">
                        <section class="wrap section row row--gutter16 pt60 pb40">
                            <div class="col col-full text-center">
                                <div class="col col-full">
                                    <p class="section__label">Achievements & numbers</p>
                                </div>
                                <div class="col col-full col--title">
                                    <h2 class="section__title">The size of <strong>our success</strong></h2>
                                </div>
                            </div>
                            <div class="numbers overflow-h pt20">
                                <div class="row row--gutter16 numbers-slider" id="Div1">
                                    <div class="clmn col-md-4 col-xl-4 numbers__col col--title">
                                        <div class="numbers__each">
                                            <p class="numbers__title"><span>140+</span> employees</p>
                                            <p class="numbers__description">All of our software experts
                                                <br>
                                                are working under one roof</p>
                                        </div>
                                    </div>
                                    <div class="clmn col-md-4 col-xl-4 numbers__col col--title">
                                        <div class="numbers__each">
                                            <p class="numbers__title"><span>150+</span> delivered projects</p>
                                            <p class="numbers__description">We’ve got long experience
                                                <br>
                                                in developing bespoke solutions</p>
                                        </div>
                                    </div>
                                    <div class="clmn col-md-4 col-xl-4 numbers__col col--title">
                                        <div class="numbers__each">
                                            <p class="numbers__title"><span>890</span> meetup followers</p>
                                            <p class="numbers__description">Our software development meetup
                                                <br>
                                                is the biggest one in the region</p>
                                        </div>
                                    </div>
                                </div>
                                <h2 class="section__title estimates__content--heading">Experience <strong>improved software development</strong></h2>
                                <button class="estimates__content--cta btn btn__primary estimate__button" onclick="location.href='/services/services'">
                                    Learn More →
                                </button>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </div>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'MWebWare'
  }
}
</script>
   
<style>
.home-links a {
  margin-right: 1rem;
}
</style>
