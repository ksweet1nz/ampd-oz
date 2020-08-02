import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import { Layout } from "../components"

const Info = styled.div`
  margin: 3rem;
  h1,
  h2 {
    text-transform: capitalize;
  }
  h2 {
    font-weight: 100;
  }
  h3 {
    font-family: var(--ff-primary);
    margin-top: 2rem;
  }

  p {
    margin-top: 2rem;
  }
`
const ProjectTemplate = ({ data }) => {
  const {
    project_title,
    student_name,
    research_question,
    abstract,
  } = data.project.data
  const fixed = data.project.data.image.localFiles[0].childImageSharp.fixed
  return (
    <Layout>
      <Info>
        <Image className="img" fixed={fixed} />

        <h1>{project_title}</h1>
        <h2>{student_name}</h2>
        <h3>{research_question}</h3>
        <p>{abstract}</p>
      </Info>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProject($slug: String) {
    project: airtable(data: { slug: { eq: $slug } }) {
      data {
        abstract
        project_title
        research_question
        slug
        student_name
        student_year
        student_level
        image {
          localFiles {
            childImageSharp {
              fixed(width: 400) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`

export default ProjectTemplate
