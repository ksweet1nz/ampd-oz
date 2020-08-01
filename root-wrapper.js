import React from "react"
import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`


  /*
  -------------------------------
  Variables
  -------------------------------
  */

  :root {
    --clr-primary-1: #ff009c;
    --clr-primary-2: #ff96d6;
    --clr-grey-1: #1f1f1f;
    --clr-grey-6: #b5b5b5;
    --clr-grey-9: #F8F8F8;
    --ff-primary: 'Lato', sans-serif;
    --ff-heading: 'Montserrat', sans-serif;
    --spacing: 0.1rem;
  }

  /*
  -------------------------------
  VGlobal Styles
  -------------------------------
  */

  *, 
  ::before,
  ::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  body {
    background-color: var(--clr-grey-1);
    color: var(--clr-grey-9);
    font-family: var(--ff-primary);
    font-size: 0.875rem;
    line-height: 1.5;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--ff-heading);
    font-weight: 400;
    letter-spacing: var(--spacing);
    line-height: 1.25;
  }

  img {
    width: 100%;
  }

  ul {
    list-style-type: none;
  }

`

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <GlobalStyle />
      {element}
    </>
  )
}
