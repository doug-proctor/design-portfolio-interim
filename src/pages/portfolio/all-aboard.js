import React from "react"
import Helmet from "react-helmet"

import Row from "../../components/Row"
import Col from "../../components/Col"
import Main from "../../components/Main"
import Study from "../../components/Study"
import Image from "../../components/Image"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Heading from "../../components/Heading"
import ImageRow from "../../components/ImageRow"
import GreyZone from "../../components/GreyZone"
import Readable from "../../components/Readable"
import Container from "../../components/Container"
import Blockquote from "../../components/Blockquote"

import dashboardImage from "../../images/studies/iproov/dashboard.png"
import accountSetupImage from "../../images/studies/iproov/account-setup.png"
import legalImage from "../../images/studies/iproov/legal.png"
import pricingImage from "../../images/studies/iproov/pricing.png"
import hierarchiesImage from "../../images/studies/iproov/hierarchies.png"
import relationshipsImage from "../../images/studies/iproov/relationships.png"
import experienceMapImage from "../../images/studies/iproov/experience-map.png"
import businessFunctionsImage from "../../images/studies/iproov/business-functions.png"
import dataFlowImage from "../../images/studies/iproov/data-flow.png"
import freshdeskDocsImage from "../../images/studies/iproov/freshdesk-docs.png"
import freshdeskCodeImage from "../../images/studies/iproov/freshdesk-code.png"
import journeysImage from "../../images/studies/iproov/journeys.png"
import wireflowsImage from "../../images/studies/iproov/wireflows.png"
import wireframe1Image from "../../images/studies/iproov/wireframe-1.png"
import wireframe2Image from "../../images/studies/iproov/wireframe-2.png"
import wireframe3Image from "../../images/studies/iproov/wireframe-3.png"
import ui1Image from "../../images/studies/iproov/11.png"
import ui2Image from "../../images/studies/iproov/12.png"

const title = "Preparing a startup for sudden growth"
const intro =
  "When a biometric authentication startup has spent 6 years in R&D and is finally ready to hit the mass-market, a lot of things need to be in place. I was brought in to help solve internal bottlenecks and create a scalable onboarding platform."

export default function Eon() {
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
            <Readable>
              <p className="secondary">
                Note: due to the confidential nature of the work, I'm unable to
                go into too much detail or show too many samples.
              </p>
              <Heading>The Challenge</Heading>
              <p>
                Unable to manually handle the influx of new customers, I was
                hired as an all-round UX, UI and engineer to come in and create
                an integrated and streamlined customer onboarding process.
              </p>
              <p>
                We worked together to establish a clearly articulated problem
                statement:
              </p>
              <Blockquote>
                How can we enable the company to support the sudden rapid growth
                in customer base?
              </Blockquote>
              <p>Flip it on its head, break it down:</p>
              <ul>
                <li>Who are the customers?</li>
                <li>What are the current bottlenecks and pain points?</li>
                <li>
                  How can we use technology to enable effective self-service?
                </li>
              </ul>
            </Readable>
            <GreyZone>
              <br />
              <Heading centred super="The solution">
                Introducing the Partner Portal
              </Heading>
              <br />
              <br />
              <ImageRow>
                <Row>
                  <Col>
                    <figure>
                      <Image
                        src={dashboardImage}
                        alt="Total visibility of onboarding pipeline"
                      />
                      <figcaption>
                        Total visibility of onboarding pipeline
                      </figcaption>
                    </figure>
                  </Col>
                  <Col>
                    <figure>
                      <Image
                        src={accountSetupImage}
                        alt="Bespoke account set-up for ultimate flexibility"
                      />
                      <figcaption>
                        Bespoke account set-up for ultimate flexibility
                      </figcaption>
                    </figure>
                  </Col>
                </Row>
              </ImageRow>
              <ImageRow>
                <Row>
                  <Col>
                    <figure>
                      <Image
                        src={legalImage}
                        alt="Streamlined handling of legal paperwork"
                      />
                      <figcaption>
                        Streamlined handling of legal paperwork
                      </figcaption>
                    </figure>
                  </Col>
                  <Col>
                    <figure>
                      <Image
                        src={pricingImage}
                        alt="Comprehensive pricing options"
                      />
                      <figcaption>Comprehensive pricing options</figcaption>
                    </figure>
                  </Col>
                </Row>
              </ImageRow>
            </GreyZone>
            <Readable>
              <Heading super="How we got there">
                Modelling client relationships
              </Heading>
              <p>
                We had to understand the customers and different types of client
                relationships. iProov had already formed several relationships
                with other organisations, and we could use these as prototypical
                examples of the different types of B2B and B2C relationships to
                design for.
              </p>
              <p>
                An examination of the general commercial structure of each of
                these relationships allowed me to create a set of abstracted
                client relationship models, which we could use almost as
                “commercial personas”.
              </p>
            </Readable>
            <ImageRow>
              <Row>
                <Col>
                  <figure>
                    <Image src={hierarchiesImage} alt="Reseller hierarchies" />
                    <figcaption>Reseller hierarchies</figcaption>
                  </figure>
                </Col>
                <Col>
                  <figure>
                    <Image
                      src={relationshipsImage}
                      alt="Commercial relationships"
                    />
                    <figcaption>Commercial relationships</figcaption>
                  </figure>
                </Col>
              </Row>
            </ImageRow>
            <Readable>
              <Heading>Mapping the onboarding process</Heading>
              <p>
                We had to understand the internal bottlenecks and pain points.
                Through interviews with each member of the sales and business
                teams I was able to map out the entire onboarding process — from
                the legal paperwork, to deploying proof-of-concept service
                integrations, to billing and invoicing customers.
              </p>
            </Readable>
            <Image src={experienceMapImage} alt="Experience map" />
            <Readable>
              <p>
                The more we looked at it, the more we saw that this problem
                wasn’t just with onboarding. It actually extended to almost all
                of the primary business functions, across not just the lead
                life-cycle but also the entire client relationship.
              </p>
              <p>
                So we created a map of these functions, and began to look at the
                requirements for each of them.
              </p>
            </Readable>
            <Image src={businessFunctionsImage} alt="Business functions" />
            <Readable>
              <p>
                Now that we had our own business requirements broken down and
                mapped out, we could ask the golden question: how could we
                create a scalable, end-to-end business support system that
                encompassed sales, onboarding, support, reporting, billing and
                invoicing?
              </p>
            </Readable>
            <Image src={dataFlowImage} alt="Data flow" />
            <Readable>
              <Heading>Service experiments</Heading>
              <p>
                The first step towards finding an answer was to take each
                component business function and find out what off-the-shelf
                services were already available out there. From there on we’d be
                able to work out how much custom application we’d nee. We
                undertook a market review and evaluated key products and
                services.
              </p>
              <p>
                With a short-list of services, we could now look creating
                proof-of-concept integrations to see how we could possibly tie
                them all together in a way that would meet our business
                requirements.
              </p>
            </Readable>
            <ImageRow>
              <Row>
                <Col>
                  <figure>
                    <Image
                      src={freshdeskDocsImage}
                      alt="Freshdesk documentation"
                    />
                    <figcaption>
                      We pored over developer documentation
                    </figcaption>
                  </figure>
                </Col>
                <Col>
                  <figure>
                    <Image src={freshdeskCodeImage} alt="Code" />
                    <figcaption>We wrote a lot of code</figcaption>
                  </figure>
                </Col>
              </Row>
            </ImageRow>
            <Readable>
              <p>
                After months of experimentation with different services, APIs,
                architectures and schemas, I was able to put together a proposal
                for a solution that would unify and integrate the key internal
                business processes.
              </p>
              <Heading super="And finally...">
                Sketching out a customer self-service platform
              </Heading>
              <p>
                There was, however, one last critical piece of the puzzle: how
                were we going to bring the customers themselves directly into
                these processes? We had to understand how we could create a
                customer-facing onboarding process that would be simple for
                customers but also reduce the workload on iProov.
              </p>
              <p>
                This was actually the easiest part of the project, because by
                now we’d already done most of the heavy lifting. We had:
              </p>
              <ul>
                <li>A clear set of business requirements</li>
                <li>
                  A clear, validated vision of a service architecture unified
                  under the Partner Portal
                </li>
              </ul>
              <p>
                I could get straight to work modelling customer tasks, sketching
                out journey maps, and finding the simplest ways to implement
                customer interactions.
              </p>
            </Readable>
            <ImageRow>
              <Row>
                <Col>
                  <figure>
                    <Image src={journeysImage} alt="User journeys" />
                    <figcaption>User journeys</figcaption>
                  </figure>
                </Col>
                <Col>
                  <figure>
                    <Image src={wireflowsImage} alt="Wireflows" />
                    <figcaption>Wireflows</figcaption>
                  </figure>
                </Col>
              </Row>
            </ImageRow>
            <ImageRow>
              <Row>
                <Col>
                  <figure>
                    <Image src={wireframe1Image} alt="Wireframes" />
                    <figcaption>Wireframes</figcaption>
                  </figure>
                </Col>
                <Col>
                  <figure>
                    <Image src={wireframe3Image} alt="Prototypes" />
                    <figcaption>Prototypes</figcaption>
                  </figure>
                </Col>
                <Col>
                  <figure>
                    <Image src={wireframe2Image} alt="User testing" />
                    <figcaption>User testing</figcaption>
                  </figure>
                </Col>
              </Row>
            </ImageRow>
            <Readable>
              <Heading>Lastly, the UI</Heading>
              <p>
                From here on it was just a matter of developing these wireframes
                into fully-realised UI documents. In fact, by relying heavily on
                the Bootstrap CSS framework I was able to go straight from
                wireframes into React components. During this process I made
                ongoing changes to the CSS where appropriate so that the Portal
                began to take on its own visual identity.
              </p>
            </Readable>
            <ImageRow>
              <Row>
                <Col>
                  <figure>
                    <Image src={ui1Image} alt="UI" />
                    {/*<figcaption>Key messaging hierarchy</figcaption>*/}
                  </figure>
                </Col>
                <Col>
                  <figure>
                    <Image src={ui2Image} alt="UI" />
                    {/*<figcaption>LADs mini-framework</figcaption>*/}
                  </figure>
                </Col>
              </Row>
            </ImageRow>
            <GreyZone compact>
              <Readable>
                <Heading super="The results">🚀 Rapid growth</Heading>
                <Heading sm>New powers granted</Heading>
                <p>
                  With a new internal visibility of the entire onboarding
                  pipeline and customer life-cycle, iProov have unlocked new
                  powers of responsiveness, agility, and customer service.
                </p>
                <Heading sm>No more lost customers</Heading>
                <p>
                  No more missing emails, lost phone memos, forgotten NDA
                  signatures. The new system is watertight, and iProov customers
                  were no longer falling through the net.
                </p>
                <Heading sm>Rapid increase in customer onboarding</Heading>
                <p>
                  When we put the new self-service portal live, iProov went from
                  onboarding less than 5 customers a week, to more than 50.
                </p>
                <p>
                  If you’re looking for a new sales / account management role,
                  iProov is now hiring...
                </p>
              </Readable>
              <br />
              <br />
              <br />
            </GreyZone>
          </Study>
          <Footer />
        </Container>
      </Main>
    </>
  )
}
