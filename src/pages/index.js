import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Nav from "../components/Nav"
import Card from "../components/Card"
import GridBg from "../components/GridBg"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Container from "../components/Container"
import Strapline from "../components/Strapline"

import LogoEon from "../images/studies/eon/logo-eon.png"
import LogoIproov from "../images/studies/iproov/logo-iproov.svg"
import LogoOneDome from "../images/studies/onedome/logo-onedome.svg"

export const query = graphql`
  query {
    file(relativePath: { eq: "studies/eon/logo-eon.png" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default function Home(props) {
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
          <Nav />
          <Card
            image={LogoOneDome}
            title="Disrupting mortgages"
            studySlug="disrupting-mortgages"
          >
            When a startup aims to unite all of the property-buying journeys
            under one digital roof, they’re going to have to digitise the
            mortgages too. I was hired to carry out the research and design for
            the new service.
          </Card>
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
