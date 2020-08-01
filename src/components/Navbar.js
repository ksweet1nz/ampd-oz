import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavBar = () => {
  return (
    <Wrapper>
      <div className="nav-header">
        <ul className="nav-links">
          <Link to="#">
            <li>news</li>
          </Link>

          <Link to="/projects/">
            <li>projects</li>
          </Link>
          <Link to="#">
            <li>about</li>
          </Link>
        </ul>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  align-items: center;
  background: transparent;
  display: flex;
  height: 5rem;
  margin-left: 5rem;
  position: relative;
  z-index: 1;

  .nav-header {
    align-items: center;
    display: flex;
  }

  .nav-links {
    background-color: var(--clr-primary-1);
    display: none;
  }

  @media (min-width: 800px) {
    .nav-links {
      max-width: 500px;
      display: flex;
    }

    li {
      color: var(--clr-grey-9);
      font-size: 1rem;
      padding: 0.75rem 1.5rem;
      position: relative;
      text-transform: capitalize;
      :hover {
        background-color: black;
        text-decoration: underline;
      }
    }
  }
`

export default NavBar
