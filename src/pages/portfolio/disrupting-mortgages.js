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

import factImage from "../../images/studies/onedome/1-fact.png"
import dashboardImage from "../../images/studies/onedome/1-dashboard.png"
import meetImage from "../../images/studies/onedome/1-meet.png"
import landingImage from "../../images/studies/onedome/1-landing.png"
import processImage from "../../images/studies/onedome/process.png"
import planImage from "../../images/studies/onedome/plan.jpg"
import pain1Image from "../../images/studies/onedome/pain-1.png"
import pain2Image from "../../images/studies/onedome/pain-2.png"
import pain3Image from "../../images/studies/onedome/pain-3.png"
import unhappy1Image from "../../images/studies/onedome/unhappy-1.png"
import unhappy2Image from "../../images/studies/onedome/unhappy-2.png"
import unhappy3Image from "../../images/studies/onedome/unhappy-3.png"
import unhappiesImage from "../../images/studies/onedome/unhappies.png"
import classicImage from "../../images/studies/onedome/classic.png"
import journey1Image from "../../images/studies/onedome/journey-1.png"
import journey2Image from "../../images/studies/onedome/journey-2.png"
import journey3Image from "../../images/studies/onedome/journey-3.png"
import codesignImage from "../../images/studies/onedome/codesign.png"
import iterateImage from "../../images/studies/onedome/iterate.png"
import sketch1Image from "../../images/studies/onedome/sketch-1.png"
import sketch2Image from "../../images/studies/onedome/sketch-2.png"
import sketch3Image from "../../images/studies/onedome/sketch-3.png"
import wireframe1Image from "../../images/studies/onedome/wireframe-1.png"
import wireframe2Image from "../../images/studies/onedome/wireframe-2.png"
import ut1Image from "../../images/studies/onedome/ut-1.png"
import ut2Image from "../../images/studies/onedome/ut-2.png"
import ut3Image from "../../images/studies/onedome/ut-3.png"
import ui1Image from "../../images/studies/onedome/ui-1.png"
import ui2Image from "../../images/studies/onedome/ui-2.png"

const title = "Disrupting mortgages with OneDome"
const intro =
  "When a startup aims to unite all of the property-buying journeys under one digital roof, they’re going to have to digitise the mortgages too. I was brought in to help define and carry out the research and design for the new service."

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
            <Readable>
              <p>
                Buying your first property should be an exciting adventure, but
                all too often it’s plagued with stress and anxiety, due in part
                to old-fashioned ways of doing things.
              </p>
              <p>
                By creating an ecosystem of tools and services that engage
                property buyers, sellers, estate agents, brokers and
                conveyancers, OneDome brings these various separate journeys
                together into one larger and actually exciting customer
                adventure.
              </p>
              <p>
                My brief was to help fulfil this business strategy by creating
                the final piece of the ecosystem: the online mortgage
                application service.
              </p>
              <Heading sm>My role</Heading>
              <p>
                I was hired as a full-stack designer, to undertake all design
                tasks for the mortgage application service, from research, to
                prototyping, to final UI design and delivery.
              </p>
              <p>
                The product owner and I made an excellent team. We worked
                closely together throughout the project, always ensuring the
                interests of the users, management and other internal teams were
                represented appropriately.
              </p>
            </Readable>
            <GreyZone>
              <br />
              <Heading centred super="The solution">
                Online Mortgage Application
              </Heading>
              <br />
              <br />
              <ImageRow>
                <Row>
                  <Col>
                    <figure>
                      <Image
                        src={landingImage}
                        alt="Total visibility of onboarding pipeline"
                      />
                      {/*<figcaption>111</figcaption>*/}
                    </figure>
                  </Col>
                  <Col>
                    <figure>
                      <Image
                        src={meetImage}
                        alt="Bespoke account set-up for ultimate flexibility"
                      />
                      {/*<figcaption>222</figcaption>*/}
                    </figure>
                  </Col>
                </Row>
              </ImageRow>
              <ImageRow>
                <Row>
                  <Col>
                    <figure>
                      <Image
                        src={dashboardImage}
                        alt="Streamlined handling of legal paperwork"
                      />
                      {/*<figcaption>333</figcaption>*/}
                    </figure>
                  </Col>
                  <Col>
                    <figure>
                      <Image
                        src={factImage}
                        alt="Comprehensive pricing options"
                      />
                      {/*<figcaption>444</figcaption>*/}
                    </figure>
                  </Col>
                </Row>
              </ImageRow>
            </GreyZone>
            <Readable>
              <Heading super="How we got there">The lay of the land</Heading>
              <p>
                It was clear that we had two primary actors that would be
                interacting with each other: the buyers and the brokers.{" "}
              </p>
              <Heading sm>Brokers</Heading>
              <p>
                It had already been established that for MVP OneDome would hire
                one initial broker who would operate the broker’s side of the
                application service. This broker would guide the applicants
                through the process, receive and process their information, and
                issue them with documentation at key stages.
              </p>
              <Heading sm>Buyers</Heading>
              <p>
                To keep things simple for the MVP, we decided to focus on
                first-time buyers. This was done by looking at the value of the
                market segments, and the added complexity that would be required
                to cater to other types of buyers. Our target market:
              </p>
              <ul>
                <li>
                  Existing OneDome customers emerging from the Estate Agent
                  journey (more on that later)
                </li>
                <li>New customers coming in from search and ads</li>
              </ul>
              <Heading sm>Ecosystem</Heading>
              <p>
                All actors need a stage, and our stage was the OneDome
                ecosystem. This consisted of several existing property-related
                services and journeys, and we knew that we’d need to map these
                all out clearly so that we could understand how to create a new
                organism within it.
              </p>
              <Heading sm>The plan</Heading>
              <p>We broke the project down into the following phases:</p>
              <Image src={processImage} alt="Project process" />
              <p>
                One of my favourite things to do is create a space on a wall
                somewhere visible to the rest of the company so that anyone can
                get an idea of what’s going on. It’s amazing how many useful and
                enjoyable conversations get started this way with unexpected
                people that the project might not have touched otherwise.
              </p>
              <Image src={planImage} alt="Project plan up on the wall" />
              <Heading super="OK, Lets get down to it">Broker research</Heading>
              <p>
                The first part of the process would be establishing the
                constraints on the brokers’ side of things. This essentially
                boiled down to financial tools and regulations. The cold hard
                reality was that we would not be able to step outside these
                constraints, so we decided that we needed to get to know them
                well before we even looked at buyers.
              </p>
              <Heading sm>Examining broker tools</Heading>
              <p>
                We contacted several brokers and asked them to take us through
                the entire process for handling a customer’s mortgage
                application. This gave us insight into:
              </p>
              <ul>
                <li>What tools were used</li>
                <li>Which questions were required</li>
                <li>How to work around various obstacles</li>
                <li>
                  The challenges that the brokers had with obtaining certain
                  pieces of information from applicants.
                </li>
              </ul>
              <p>
                This was our first major constraint: brokers would need answers
                to about 50 specific questions, in a specific order, in specific
                stages, and in specific formats.
              </p>
              <Heading>Buyer research</Heading>
              <p>
                Before dealing with those 50 broker questions, we wanted to find
                out more about the pain-points of the property-buying journey.
                To do this we recruited a number of people who had bought their
                first property in the last 12 months, and we conducted
                structured interviews with them.
              </p>
              <Heading sm>Pain points</Heading>
              <ul>
                <li>Lack of choice</li>
                <li>Pushy sales pitches</li>
                <li>Feeling like a commodity</li>
                <li>Disconnection from the process</li>
                <li>Lack of transparency and visibility</li>
              </ul>
              <p>
                Armed with this knowledge, we already had ideas about how we
                could create a much more trustworthy and efficient experience.
              </p>
            </Readable>
            <ImageRow>
              <Row>
                <Col>
                  <figure>
                    <Image src={pain1Image} alt="111" />
                    {/*<figcaption>111</figcaption>*/}
                  </figure>
                </Col>
                <Col>
                  <figure>
                    <Image src={pain2Image} alt="222" />
                    {/*<figcaption>222</figcaption>*/}
                  </figure>
                </Col>
                <Col>
                  <figure>
                    <Image src={pain3Image} alt="333" />
                    {/*<figcaption>333</figcaption>*/}
                  </figure>
                </Col>
              </Row>
            </ImageRow>
            <Readable>
              <Heading sm>Questions about questions (about questions)</Heading>
              <p>Now, about those 50 questions. We needed to find out:</p>
              <ul>
                <li>Which questions were actually required</li>
                <li>What people felt and thought about the questions</li>
                <li>
                  How to identify and handle sensitive or difficult questions
                </li>
                <li>How to group and sequence the questions in the best way</li>
                <li>
                  How to support the customer as much as possible with each
                  question
                </li>
                <li>How to incentivise the customer along this journey</li>
              </ul>
              <Heading sm>Study 1: Happy Caterpillar</Heading>
              <p>
                We recruited 6 carefully screened participants and asked them to
                participate in an exercise designed to uncover their thoughts
                and feelings about the mortgage application questions.
              </p>
              <p>
                Each participant sorted through the questions, placing each one
                into one of three groups: happy, medium and sad.{" "}
              </p>
            </Readable>
            <ImageRow>
              <Row>
                <Col>
                  <figure>
                    <Image src={unhappy1Image} alt="111" />
                    {/*<figcaption>111</figcaption>*/}
                  </figure>
                </Col>
                <Col>
                  <figure>
                    <Image src={unhappy2Image} alt="222" />
                    {/*<figcaption>222</figcaption>*/}
                  </figure>
                </Col>
                <Col>
                  <figure>
                    <Image src={unhappy3Image} alt="333" />
                    {/*<figcaption>333</figcaption>*/}
                  </figure>
                </Col>
              </Row>
            </ImageRow>
            <Readable>
              <p>
                We spent the second half of the exercise digging into why the
                participant was unhappy with the question. This led to all kinds
                of explanations - sometimes the problem is just semantic, other
                times the question is suspiciously irrelevant, and in the worst
                cases it is just too personal.
              </p>
              <p>
                At the end of this we knew which questions the customers hated
                (yes, actually hated), which ones should be dropped if possible,
                which ones needed to be rephrased and which ones needed extra
                supporting content, like definitions or justifications.
              </p>
              <Image
                src={unhappiesImage}
                alt="Questions that people were unhappy with"
              />
              <Heading>Study 2: Answer Time</Heading>
              <p>
                Not knowing the answer to a question is a critical roadblock in
                the application process—it can lead the user to submit incorrect
                information or to abandon the application entirely.
              </p>
              <p>
                We asked each participant to review all of the questions and to
                point out which ones they couldn’t answer. For each of these
                tricky questions we asked the participant:
              </p>
              <ul>
                <li>What would they need to do to find the answer?</li>
                <li>How long would it take?</li>
              </ul>
              <p>
                This was very useful, and led to several features to help users
                when they got stuck, such as being able to set a reminder to
                come back to the application the following day.
              </p>
              <Heading>Study 3: Classic Sort</Heading>
              <p>
                Now that we’d explored the emotional dimensions of the
                questions, we could turn to the more technical task of figuring
                out how to group and order the questions. For this we could turn
                to the classic open card sort, a more straightforward exercise.
              </p>
              <p>
                We got the same participants to separate the cards into any
                number of groups and then give each group a name. The results of
                the exercise showed a clear general pattern, and gave us
                confidence in knowing how users would expect the questions to be
                grouped.
              </p>
              <p>
                This would turn out to be critically useful, because the MIDAS
                tool did not group the questions in the same way.
              </p>
              <Image src={classicImage} alt="Results of a classic card sort" />
              <Heading sm>Truth and trust</Heading>
              <p>
                Zooming out a bit, we saw some key human themes emerging from
                these studies: truth and trust.
              </p>
              <p>
                We saw that the participants were almost always asking “why do
                they need this information?”. Combine that angst with concerns
                about overt privacy invasion, and you have a recipe for a
                terrible customer experience.
              </p>
              <p>
                At worst you lose the customer and damage your brand, and at
                best you receive untruthful answers that lead to inaccurate
                calculations and inappropriate financial products being offered.
              </p>
              <Blockquote>
                We had several participants tell us that they would lie to try
                to get a better offer.
              </Blockquote>
              <p>
                This isn’t an exaggeration—we had several participants tell us
                that they would lie to try to get a better offer. It boiled down
                to this: If we could earn the customers trust, we could convert
                more users and increase the quality and appropriateness of the
                financial products being offered.
              </p>
              <Heading>Mapping the service ecosystem</Heading>
              <p>
                We needed to design the new mortgage service so that it would
                fit into the OneDome ecosystem, so we needed to ensure that
                customers would be able to move in and out of the various
                journeys in a way that made sense to them and to the business.{" "}
              </p>
              <Heading sm>Stakeholder interviews</Heading>
              <p>
                We started by interviewing the business leads of each of the
                ecosystem services to find out what their goals and strategies
                were, as well as their priorities and challenges.
              </p>
              <Heading sm>Journey audits</Heading>
              <p>
                For each service we completed thorough journey maps. These
                showed all touchpoints, entry and exit points, and how users
                would move out of one journey and into another. Using this
                information we could increase business value by ensuring that
                customers we funneled into the right places at the right times.
              </p>
            </Readable>
            <ImageRow>
              <Row>
                <Col>
                  <figure>
                    <Image src={journey1Image} alt="111" />
                    {/*<figcaption>111</figcaption>*/}
                  </figure>
                </Col>
                <Col>
                  <figure>
                    <Image src={journey2Image} alt="222" />
                    {/*<figcaption>222</figcaption>*/}
                  </figure>
                </Col>
                <Col>
                  <figure>
                    <Image src={journey3Image} alt="333" />
                    {/*<figcaption>333</figcaption>*/}
                  </figure>
                </Col>
              </Row>
            </ImageRow>
            <Readable>
              <p>
                The audits also showed the flow of data through the journeys.
                This was especially important because knowing what data was
                available at which points, we could create features and UX
                enhancements to improve the effectiveness of the user
                experience.
              </p>
              <Heading>And finally, we can prototype!</Heading>
              <Heading sm>Co-designing</Heading>
              <p>
                Another one of my favourite things to do is co-design. Grab a
                whiteboard and a bunch of interested people and just start
                drawing. It’s amazing what the collective can come up with. This
                is a part of design thinking.
              </p>
              <Image src={codesignImage} alt="Co-designing" />
              <Heading sm>Question flows and UI logic</Heading>
              <p>
                The journey that an applicant takes through the application
                process has many forks along the way. Some answers lead to more
                questions, others let you skip past irrelevant sections. We
                mapped out every path and presented it in a way that the
                developers could easily translate into code.
              </p>
              <Heading sm>Initial sketches </Heading>
              <p>
                I usually start off with a set of initial sketches. These don’t
                take long and can be tested within the organisation and with
                recruited participants easily and cheaply. This is the start of
                the design iteration cycle:
              </p>
              <Image src={iterateImage} alt="Design iteration loop" />
              <p>
                Evaluation is usually done using ordinary user testing
                techniques, such as the Think Aloud protocol.
              </p>
            </Readable>

            {/* Sketches */}

            <ImageRow>
              <Row>
                <Col>
                  <figure>
                    <Image src={sketch1Image} alt="111" />
                    {/*<figcaption>111</figcaption>*/}
                  </figure>
                </Col>
                <Col>
                  <figure>
                    <Image src={sketch2Image} alt="222" />
                    {/*<figcaption>222</figcaption>*/}
                  </figure>
                </Col>
                <Col>
                  <figure>
                    <Image src={sketch3Image} alt="333" />
                    {/*<figcaption>333</figcaption>*/}
                  </figure>
                </Col>
              </Row>
            </ImageRow>

            {/* Wireframes */}

            <ImageRow>
              <Row>
                <Col>
                  <figure>
                    <Image src={wireframe1Image} alt="111" />
                    {/*<figcaption>111</figcaption>*/}
                  </figure>
                </Col>
                <Col>
                  <figure>
                    <Image src={wireframe2Image} alt="222" />
                    {/*<figcaption>222</figcaption>*/}
                  </figure>
                </Col>
              </Row>
            </ImageRow>

            {/* ut */}

            <ImageRow>
              <Row>
                <Col>
                  <figure>
                    <Image src={ut1Image} alt="111" />
                    {/*<figcaption>111</figcaption>*/}
                  </figure>
                </Col>
                <Col>
                  <figure>
                    <Image src={ut2Image} alt="222" />
                    {/*<figcaption>222</figcaption>*/}
                  </figure>
                </Col>
                <Col>
                  <figure>
                    <Image src={ut3Image} alt="333" />
                    {/*<figcaption>333</figcaption>*/}
                  </figure>
                </Col>
              </Row>
            </ImageRow>

            {/* UI */}

            <ImageRow>
              <Row>
                <Col>
                  <figure>
                    <Image src={ui1Image} alt="111" />
                    {/*<figcaption>111</figcaption>*/}
                  </figure>
                </Col>
                <Col>
                  <figure>
                    <Image src={ui2Image} alt="222" />
                    {/*<figcaption>222</figcaption>*/}
                  </figure>
                </Col>
              </Row>
            </ImageRow>
          </Study>
          <Footer />
        </Container>
      </Main>
    </>
  )
}
