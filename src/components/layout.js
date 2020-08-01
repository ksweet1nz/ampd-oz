import React from "react"
import styled from "styled-components"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Navbar />
      {children}
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
`

export default Layout
