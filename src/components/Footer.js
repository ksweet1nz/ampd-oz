import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <Wrapper>
      <p>
        &copy; {new Date().getFullYear()} Advanced Manufacturing and Prototyping
        for Design
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  color: var(--clr-grey-6);
  border-top: 1px solid var(--clr-primary-2);
  font-size: 0.75rem;
  flex: 1;
  height: 3rem;
  padding: 1rem;
`

export default Footer
