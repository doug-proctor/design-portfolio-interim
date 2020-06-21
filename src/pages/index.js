import React from "react"
import Helmet from "react-helmet"

import Card from "../components/Card"
import GridBg from "../components/GridBg"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Container from "../components/Container"
import Strapline from "../components/Strapline"

import LogoEon from "../images/studies/eon/logo-eon.png"
import LogoIproov from "../images/studies/iproov/logo-iproov.svg"
import LogoOneDome from "../images/studies/onedome/logo-onedome.svg"

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Doug Proctor &raquo; Lead UX & UI designer</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <GridBg>
        <Container>
          <Header />
        </Container>
        <Strapline />
        <Container>
          {/*<Card*/}
          {/*  image={LogoOneDome}*/}
          {/*  title="Disrupting mortages"*/}
          {/*  studySlug="disrupting-mortgages"*/}
          {/*>*/}
          {/*  When a biometric authentication startup has spent 6 years in R&D and*/}
          {/*  is finally ready to hit the market, a lot of things need to be in*/}
          {/*  place. I was brought in to solve internal bottlenecks and create a*/}
          {/*  scalable onboarding platform.*/}
          {/*</Card>*/}
          <Card
            image={LogoEon}
            title="146,000 phone calls later"
            studySlug="146000-phone-calls-later"
          >
            When a biometric authentication startup has spent 6 years in R&D and
            is finally ready to hit the market, a lot of things need to be in
            place. I was brought in to solve internal bottlenecks and create a
            scalable onboarding platform.
          </Card>
          <Card image={LogoIproov} title="All aboard" studySlug="all-aboard">
            When a biometric authentication startup has spent 6 years in R&D and
            is finally ready to hit the market, a lot of things need to be in
            place. I was brought in to solve internal bottlenecks and create a
            scalable onboarding platform.
          </Card>
        </Container>
        <Footer />
      </GridBg>
    </>
  )
}
