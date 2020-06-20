import React from "react"
import Helmet from "react-helmet"

// import Row from "../../components/row"
// import Col from "../../components/col"
import Main from "../../components/main"
import Study from "../../components/study"
// import Image from "../../components/Image"
import Header from "../../components/header"
import Footer from "../../components/footer"
// import Heading from "../../components/Heading"
// import ImageRow from "../../components/ImageRow"
// import GreyZone from "../../components/greyzone"
// import Readable from "../../components/readable"
import Container from "../../components/container"
// import Blockquote from "../../components/blockquote"

// import dashboardImage from "../../images/studies/iproov/dashboard.png"

const title = "OneDome title.."
const intro = "OneDome intro..."

export default function OneDome() {
  return (
    <>
      <Helmet>
        <title>Doug Proctor &raquo; Lead UX & UI designer</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Main>
        <Container>
          <Header />
          <Study title={title} intro={intro}>
            <p> - - - </p>
          </Study>
          <Footer />
        </Container>
      </Main>
    </>
  )
}
