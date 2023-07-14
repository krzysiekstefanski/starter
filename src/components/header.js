import * as React from "react"
import styled from "styled-components"

const Container = styled.header`
  box-sizing: border-box;
  max-width: 1200px;
  margin: 0 auto;
`

const Header = ({ siteTitle }) => (
  <Container>
    Header Component
  </Container>
)

export default Header
