import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Container from '../components/container'
import Tagline from '../components/tagline'

const ServicesWrapper = styled('section')`
  text-align: center;
  
  a {
    text-decoration: none;
  }
`

const CoverCard = styled('div')`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  height: 290px;
  margin-top: 30px;
  padding: 0 16%; 
  transition: all 0.3s ease-out;

  &:hover {
    filter: drop-shadow(0 0 12px rgba(0, 0, 0, .5));
    transform: scale(1.04);
  }
`

const CardTitle = styled('h3')`
  margin-bottom: 1rem;
`

const ServiceCard = props => (
  <div className="col-6">
    <a href="/">
      <CoverCard 
        className="coverd-card" 
        css={css`
          background-image: linear-gradient(
          rgba(0, 0, 0, 0.4),
          rgba(0, 0, 0, 0.4)
          ),url(${props.img});
        `}
      >
        <Tagline>{props.tagline}</Tagline>
        <CardTitle>{props.title}</CardTitle>
        <p>{props.excerpt}</p>
      </CoverCard>
    </a>
  </div>
)

export default () => (
  <ServicesWrapper id="services">
    <Container>
      <div className="col-8 m-auto">
        <Tagline>Servicios</Tagline>
        <h2>Put your creative energy to work, with Source</h2>
      </div>
      <div className="row">
        <ServiceCard 
          tagline="Diseño Web"
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          excerpt="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Adipisci saepe neque, quas nostrum ad ab."
          img="./silver-imac-displaying-collage-photos-1779487.jpg"
        />
        <ServiceCard 
          tagline="Desarrollo Web"
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          excerpt="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Adipisci saepe neque, quas nostrum ad ab."
          img="./blur-close-up-code-computer-546819.jpg"
        />
        <ServiceCard 
          tagline="Diseño Publicitario"
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          excerpt="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Adipisci saepe neque, quas nostrum ad ab."
          img="./close-up-photography-of-smartphone-744462.jpg"
        />
        <ServiceCard 
          tagline="Redacción de Contenidos"
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          excerpt="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Adipisci saepe neque, quas nostrum ad ab."
          img="./woman-typing-writing-programming-7112.jpg"
        />
      </div>
    </Container>
  </ServicesWrapper>
)