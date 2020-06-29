import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"

import Nav from "../components/Nav"
import GridBg from "../components/GridBg"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SmallCard from "../components/SmallCard"
import Container from "../components/Container"
import Strapline from "../components/Strapline"

import kiwaLogo from "../images/side-projects/kiwa.png"
import chefsLogo from "../images/side-projects/chefs.png"
import exposureLogo from "../images/side-projects/exposure.png"
import yamlBootLogo from "../images/side-projects/yaml-boot.png"
import htmlSketchLogo from "../images/side-projects/html-sketch.png"

const cardContent = [
  {
    title: "Effortless SilverStripe deployments",
    description:
      "Provision and deploy SilverStripe applications on DigitalOcean. A lockdown project. Launching soon!",
    image: kiwaLogo,
  },
  {
    title: "Allergen data for high-end restaurants",
    description:
      "Working with a head chef to streamline the flow of allergen information from the suppliers to the kitchens to front of house to the customer.",
    image: chefsLogo,
  },
  {
    title: "Field exposure calculator",
    description:
      "Looking to sharpen your light measurement skills? I built a handy tool that lets you explore the relationship between ISO, aperature and shutter speed. Master the exposure triangle today!",
    image: exposureLogo,
  },
  {
    title: "YAML Bootstrap",
    description:
      "About 6 years ago I found myself churning out numerous web campaigns for Kellogg’s. They were all similar and simple, so I built this tool that allowed me and the team to describe a wireframe in YAML and have it automatically converted into a live HTML prototype. It saved us weeks of work.",
    image: yamlBootLogo,
  },
  {
    title: "HTML Sketch plugin",
    description:
      "Long ago in the early days of Sketch I made this plugin that allowed me to convert a set of Sketch artboards into a clickable HTML prototype that I could share with clients. ",
    image: htmlSketchLogo,
  },
]

export default function SideProjects() {
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
          {cardContent.map(card => (
            <SmallCard image={card.image} title={card.title}>
              {card.description}
            </SmallCard>
          ))}
        </Container>
        <Footer />
      </GridBg>
    </>
  )
}
