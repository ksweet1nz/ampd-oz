import React from "react"
import { Link } from "gatsby"
import logo from "../images/AMPD_A.svg"
import styled from "styled-components"

const NavBar = () => {
  return (
    <Wrapper>
      <div className="nav-header">
        <ul className="nav-links">
          <Link to="#">
            <li className="logo">
              <img src={logo} />
            </li>
          </Link>
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
  margin-left: 8rem;

  position: relative;
  z-index: 1;

  .nav-header {
    align-items: center;
    display: flex;
    margin-top: 5rem;
  }

  .nav-links {
    background-color: var(--clr-primary-1);
    display: none;
  }

  .logo {
    height: 2.5rem;
    width: 2.5rem;
    padding: 0.3rem 0 0.1rem 0.2rem;
    margin: 0.3rem;
    :hover {
      background-color: transparent;
    }
  }

  @media (min-width: 800px) {
    .nav-links {
      display: flex;
      max-width: 500px;
      margin-top: 5rem;
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
