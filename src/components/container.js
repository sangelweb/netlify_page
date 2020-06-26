import React from "react"
import styled from "@emotion/styled"

const Container = styled("div")`
  position: relative;
  width: 81.55%;
  max-width: 1400px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`

export default ({ children }) => <Container>{children}</Container>