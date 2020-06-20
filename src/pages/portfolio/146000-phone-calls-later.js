import React from "react"
import Helmet from "react-helmet"

import Row from "../../components/row"
import Col from "../../components/col"
import Main from "../../components/main"
import Study from "../../components/study"
import Image from "../../components/Image"
import Header from "../../components/header"
import Footer from "../../components/footer"
import Heading from "../../components/Heading"
import ImageRow from "../../components/ImageRow"
import GreyZone from "../../components/greyzone"
import Readable from "../../components/readable"
import Container from "../../components/container"
import Blockquote from "../../components/blockquote"

import solutionImage from "../../images/studies/eon/solution.png"
import messagingImage from "../../images/studies/eon/messaging.png"
import ladsImage from "../../images/studies/eon/lads.png"
import logsImage from "../../images/studies/eon/logs.png"
import typeMapImage from "../../images/studies/eon/type-map.png"
import testStep1Image from "../../images/studies/eon/test-step-1.png"
import testStep2Image from "../../images/studies/eon/test-step-2.png"
import testStep3Image from "../../images/studies/eon/test-step-3.png"
import testStep4Image from "../../images/studies/eon/test-step-4.png"
import techContentImage from "../../images/studies/eon/tech-content.png"
import interactionModel1Image from "../../images/studies/eon/interaction-model-1.png"
import interactionModel2Image from "../../images/studies/eon/interaction-model-2.png"

const title = "146,000 phone calls later"
const intro =
  "When an energy company gets 4000 customer support calls each day, costing £2.4 million each year, it's worth taking a look at how design can help inform customers and cut costs."

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
              <Heading>The Challenge</Heading>
              <p>
                E.ON is the world’s largest private investor-owned energy supply
                company. But having lost the edge in a world of rapid digital
                transformation, they needed their own substantial programme to
                turn things around, and to give customers the transparency and
                control that they now expected from their energy supplier.
              </p>
              <p>
                This brief was concerned with their high call centre costs,
                which stood at £2.4 million each year. Our design team was
                briefed to redesign their on-line customer self-service portal
                with the goal of reducing call centre costs by 7%.
              </p>
              <Blockquote>
                How can we reduce the number of customer phone calls to the call
                centre by 7%?
              </Blockquote>
              <p>
                There were many factors that would make this a difficult
                undertaking:
              </p>
              <ol>
                <li>Heavy regulation by Ofgem</li>
                <li>Siloed business functions within E.ON</li>
                <li>Highly political landscape</li>
                <li>Fragile, inflexible legacy technology infrastructure</li>
                <li>Isolated design team (not co-located with IT)</li>
              </ol>
              <Heading sm>My role</Heading>
              <p>
                I worked solely on the E.ON account at Engine, and was the UX
                lead on their client E.ON’s digital transformation programme. I
                led our UX team of 4, overseeing the design process, output, and
                the user testing programme.
              </p>
              <p>
                I also created a component library-based design delivery system,
                bridging the gap between the designers and developers, and
                helped the E.ON IT leadership find a way to bring Lean UX into
                their Agile process.
              </p>
            </Readable>
            <GreyZone>
              <Heading centred super="The solution">
                A redesigned self-service portal
              </Heading>
              <Image
                src={solutionImage}
                alt="Screenshots of the final mobile designs"
              />
            </GreyZone>
            <Readable>
              <Heading super="How we got there">Commercial strategy</Heading>
              <p>
                I joined the project after a substantial phase of strategy had
                been completed. There were several key outputs from that phase
                that would feed directly into our design process. We had:
              </p>
              <ul>
                <li>
                  A key messaging hierarchy, which would be woven throughout the
                  content and design of the new site
                </li>
                <li>
                  LADS, a user journey framework designed to ensure the
                  inclusion of related journeys at any relevant point of a
                  journey
                </li>
              </ul>
            </Readable>
            <ImageRow>
              <Row>
                <Col>
                  <figure>
                    <Image src={messagingImage} alt="Messaging" />
                    <figcaption>Key messaging hierarchy</figcaption>
                  </figure>
                </Col>
                <Col>
                  <figure>
                    <Image src={ladsImage} alt="LADS" />
                    <figcaption>LADs mini-framework</figcaption>
                  </figure>
                </Col>
              </Row>
            </ImageRow>
            <Readable>
              <Heading>Customer typology</Heading>
              <p>
                Crucially, E.ON’s customers can be grouped according to how they
                prefer to (or are able to) pay for their energy usage:
              </p>
              <ul>
                <li>On Demand</li>
                <li>Direct Debit (fixed)</li>
                <li>Direct Debit (variable)</li>
                <li>Pay-you-go</li>
              </ul>
              <p>
                The differences between these customers were far-reaching, and
                needed to be understood on a psychological, financial, and
                technical systems / database level.
              </p>
              <Heading>Personas</Heading>
              <p>
                In addition to inheriting strategic outputs, there was also
                prior work by the client to create a set of personas specific to
                the digital transformation programme.
              </p>
              <p>
                These weren’t created in the traditional UX way by analysing
                usability test results, but rather from a marketing segmentation
                angle. Nonetheless, they provided us with a useful way to
                categorise our basic audience types and to refer to them often
                when discussing our work.
              </p>
              <Heading>Context mapping</Heading>
              <p>
                In order to help us understand what customers expected to see
                when viewing their bill, we had to build out our understanding
                of what their different contexts could be.
              </p>
              <p>
                The first step was to examine the different customer types and
                get a clear picture of what actions and information each type is
                interested in.
              </p>
            </Readable>
            <ImageRow>
              <Row>
                <Col>
                  <figure>
                    <Image src={logsImage} alt="Call centre logs" />
                    <figcaption>Call centre logs</figcaption>
                  </figure>
                </Col>
                <Col>
                  <figure>
                    <Image
                      src={typeMapImage}
                      alt="Key goals by customer type"
                    />
                    <figcaption>Key goals by customer type</figcaption>
                  </figure>
                </Col>
              </Row>
            </ImageRow>
            <Readable>
              <Heading>Test-driven design</Heading>
              <p>
                Instead of waiting until we had a design route fully fleshed out
                and detailed, I encouraged the team to take a much leaner
                test-driven approach. Since we had weekly user testing sessions
                that we could rely on for validating any pieces of design that
                we were working on that week, we were able to test a whole lot
                of ideas in lower fidelity. This would be much more beneficial
                than testing a single, well-defined route and not being able to
                evaluate the results comparatively.
              </p>
            </Readable>
            <ImageRow>
              <Row>
                <Col>
                  <figure>
                    <Image src={testStep1Image} alt="Test objectives" />
                    <figcaption>
                      Step 1: define the hypothesis and acceptance criteria
                    </figcaption>
                  </figure>
                </Col>
                <Col>
                  <figure>
                    <Image src={testStep2Image} alt="Rough sketches" />
                    <figcaption>
                      Step 2: sketch against the test acceptance criteria
                    </figcaption>
                  </figure>
                </Col>
              </Row>
            </ImageRow>
            <ImageRow>
              <Row>
                <Col>
                  <figure>
                    <Image src={testStep3Image} alt="User testing" />
                    <figcaption>Step 3: user testing</figcaption>
                  </figure>
                </Col>
                <Col>
                  <figure>
                    <Image src={testStep4Image} alt="Results analysis" />
                    <figcaption>Step 4: test result analysis</figcaption>
                  </figure>
                </Col>
              </Row>
            </ImageRow>
            <Readable>
              <Heading>Collaboration with content and technical teams</Heading>
              <p>
                As a Big 6 energy company, E.ON was under stricter regulation
                than most companies are. This would manifest itself as one of
                the most important constraints that our design team had to work
                with: content. We collaborated with E.ON’s content teams through
                the design process, ensuring that our designs met Ofgem
                regulations, as well as E.ON’s tone and content style guides.
              </p>
              <p>
                It was also key to understand how our designs would be
                implemented into E.ON’s CMS and technology stack. Working
                closely with Sitecore developers and architects, we built up a
                common understanding and vocabulary around how our “design”
                components would be translated into CSS components, Angular
                components, and Sitecore components, each of which had different
                data requirements.
              </p>
            </Readable>
            <Image src={techContentImage} alt="Content flows" />
            <Readable>
              <Heading>Interaction modelling</Heading>
              <p>
                Once the journeys and screens were validated, we moved on
                detailing the responsive interaction modelling. This required a
                lot of input from the technical teams: any UI interaction scheme
                that we proposed needed to be feasible from a frontend, Sitecore
                and AEM point of view.
              </p>
            </Readable>
            <ImageRow>
              <Row>
                <Col>
                  <figure>
                    <Image
                      src={interactionModel1Image}
                      alt="Interaction modelling"
                    />
                    <figcaption>
                      We experimented with different responsive layouts
                    </figcaption>
                  </figure>
                </Col>
                <Col>
                  <figure>
                    <Image
                      src={interactionModel2Image}
                      alt="Interaction modelling"
                    />
                    <figcaption>
                      Communicating our layouts to the tech teams
                    </figcaption>
                  </figure>
                </Col>
              </Row>
            </ImageRow>
            <GreyZone>
              <Readable>
                <Heading super="The results">💥 We smashed the targets</Heading>
                <Heading sm>Calls reduced by 30%</Heading>

                <p>
                  When the design went live, we saw a 30% reduction in calls
                  related to the View Bill journey. This was an overall
                  reduction in calls by 9%, saving E.ON £2.2 million per year.
                </p>
                <Heading sm>60% increase in click-throughs</Heading>
                <p>
                  Part of our success was due to a 60% increase of
                  click-throughs into the View Bill journey. We’d identified
                  that part of the problem was that customers were not even
                  viewing their bills on-line, and would rather phone E.ON to
                  get the information they wanted.
                </p>
                <p>
                  And the roadmap is still years-long. With E.ON's
                  customer-first digital transformation in full swing, expect to
                  see ever-improving CX from E.ON. You might even want to switch
                  your supply to them.
                </p>
              </Readable>
            </GreyZone>
          </Study>
          <Footer />
        </Container>
      </Main>
    </>
  )
}
