import React from "react"

import Layout from "../templates/Layout"
import Banner from "../components/Banner"
import GatsbyLink from "gatsby-link"
import { Link } from "gatsby"
import { withLoginStateContext } from "../contexes/LoginStateContext"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core"
import Container from "../components/Container"

const IndexPage = () => (
  <Layout>
    <Banner />
    <Container>
      <h1>About the Course Series</h1>
      <p>
        Cyber Security Base is a free course series by University of Helsinki
        and MOOC.fi in collaboration with F-Secure that focuses on building core
        knowledge and abilities related to the work of a cyber security
        professional.
      </p>

      <p>
        Learn about tools used to analyse flaws in software systems, necessary
        knowledge to build secure software systems (esp. within Web), the skills
        needed to perform risk and threat analysis on existing systems and the
        relevant legislation within EU.
      </p>

      <p>
        The course series consists of 6 smaller courses, each with a specific
        theme. Themes include a brief introduction to cyber security,
        operational security, web software development, types of vulnerabilities
        typical of web software, discovery and mitigation of such
        vulnerabilities, and advanced topics such as secure software
        architectures and cryptography. There will be several case studies as
        well as projects for participants. At the end of the course series,
        we'll also organize a friendly capture-the-flag competition where
        participants will try to solve some security puzzles.
      </p>

      <p>
        Each course is open for a certain period of time, and must be completed
        during that window.
      </p>

      <h1>Work load and prerequisites</h1>
      <p>
        There will be programming assignments, essays, quizzes and puzzles
        throughout the courses, and completing a specific part of a course means
        working and completing most if not all of them. We expect that
        individuals work some 2-10 hours per week on the courses depending on
        their background. Some programming background and ICT experience is
        required.
      </p>

      <p>
        The course has started! You don't need to register to start doing the
        course. There is an optional registration for those who want ECTS
        credits that can be done AFTER completing the course. More instructions
        in the material. So just head to the material and start doing the
        courses!
      </p>

      <h1>ECTS credits for Finnish residents</h1>
      <p>
        If you reside in Finland, you can get a total of 10 ECTS credits for the
        course from the Open University of University of Helsinki. Your own
        school, college or university has the option of accepting these as a
        part of your studies -- you have to, however, ask your local
        administration whether they will do so. We are looking into the
        possibility of offering certificates for completion of the course series
        to all participants as well.
      </p>
    </Container>
  </Layout>
)

export default withLoginStateContext(IndexPage)
