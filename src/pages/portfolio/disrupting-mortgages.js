import React from "react"
import Helmet from "react-helmet"

// import Row from "../../components/Row"
// import Col from "../../components/Rol"
import Main from "../../components/Main"
import Study from "../../components/Study"
// import Image from "../../components/Image"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
// import Heading from "../../components/Heading"
// import ImageRow from "../../components/ImageRow"
// import GreyZone from "../../components/GreyZone"
// import Readable from "../../components/Readable"
import Container from "../../components/Container"
// import Blockquote from "../../components/Blockquote"

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
