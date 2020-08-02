import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import { Layout } from "../components"

export const query = graphql`
  {
    allAirtable(filter: { table: { eq: "Projects" } }) {
      nodes {
        data {
          student_level
          project_title
          student_name
          student_year
          image {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

const Projects = () => {
  const {
    allAirtable: { nodes: projects },
  } = useStaticQuery(query)
  return (
    <Layout>
      <Wrapper>
        {projects.map(project => {
          const {
            data: { image, project_title, student_name, level, student_year },
          } = project
          const fluid = image.localFiles[0].childImageSharp.fluid

          return (
            <div className="content">
              <Image fluid={fluid} className="img" />
              <div className="info">
                <h1>{project_title}</h1>
              </div>
            </div>
          )
        })}
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
  margin: 4rem auto;
  width: 80vw;

  .content {
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    &:hover .img {
      opacity: 0.2;
    }
    &:hover .info {
      opacity: 1;
    }
  }

  .info {
    position: absolute;
    font-size: 0.5rem;
    left: 50%;
    opacity: 0;
    text-transform: uppercase;
    top: 50%;
  }
`

export default Projects
