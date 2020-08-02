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
          slug
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
            data: { image, project_title, slug },
          } = project
          const fluid = image.localFiles[0].childImageSharp.fluid

          return (
            <div className="content">
              <Link to={`/projects/${slug}`}>
                <Image fluid={fluid} className="img" />
              </Link>
              <div className="info">
                <div className="title-info">
                  <h1>{project_title}</h1>
                </div>
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
  grid-template-columns: 1fr;
  margin: 8rem auto;
  width: 80vw;

  .content {
    border-radius: 50%;
    overflow: hidden;
    position: relative;

    &:hover .info {
      opacity: 1;
    }
    &:hover .title-info {
      opacity: 1;
    }
  }

  .info {
    background-color: var(--clr-primary-1);
    font-size: 0.4rem;
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    text-transform: uppercase;
    transition: 0.7s ease;
    top: 0;
    width: 100%;
  }

  .title-info {
    font-size: 0.5rem;
    left: 50%;
    opacity: 0;
    position: absolute;
    top: 50%;
  }

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export default Projects
