import React from 'react'
import styled from '@emotion/styled'

const Tagline = styled('span')`
  display: block;
  letter-spacing: 0.15rem;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 16px;
`

export default ({children}) => <Tagline>{children}</Tagline>