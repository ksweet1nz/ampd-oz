import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    file(relativePath: { eq: "AMPD_bk_02.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Background = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <Wrapper>
      <BackgroundImage
        Tag="div"
        fluid={fluid}
        className="bcg"
        preserveStackingContext={true}
      />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .bcg {
    /* MUST!!!!!! */
    display: grid;
    margin-top: -7rem;
    min-height: 100vh;
    opacity: 0.7;
    place-items: center;
  }
`

export default Background
