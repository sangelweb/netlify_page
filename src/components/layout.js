import React from "react"
import { Link } from "gatsby"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import Container from "../components/container"

const globalStyles = css`
  body {
    font-family: "Montserrat", sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: "Gilroy", sans-serif;
    font-weight: bold;
    font-size: 3rem;
    color: #351431;
  }
  p {
    color: #323232;
  }
`

const Header = styled("header")`
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  height: 100vh;
  background-image: url("../img/header_sw.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`

const Navbar = styled("div")`
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0.5rem 1rem;
`

const brand = css`
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
`

const Collapse = styled("div")`
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -ms-flex-align: center;
  align-items: center;
`

const Nav = styled("div")`
  display: -ms-flexbox;
  display: flex;
  padding-left: 0;
  margin-bottom: 0;
  & > a {
    display: block;
    font-size: 0.8rem;
    text-decoration: none;
    padding: 0.5rem 1rem;
  }
`

const Badge = styled("span")`
  color: #fff;
  font-size: 0.8rem;
  padding: 0.4rem 1rem;
  border-radius: 0.5rem;
  display: inline-block;
  background-color: #b037e7;
`

const HeaderContent = styled("div")`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  @media (min-width: 768px) {
    -ms-flex: 0 0 66.666667%;
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
  @media (min-width: 992px) {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
`

const Button = styled("a")`
  display: inline-block;
  font-weight: 400;
  color: ${props => (props.gradient ? "#fff" : "#b032e7")};
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: #b037e7;
  background: ${props =>
    props.gradient
      ? "linear-gradient(315deg, rgba(176,50,231,1) 0%, rgba(250,125,207,1) 100%)"
      : "transparent"};
  border: 3px solid ${props => (props.outline ? "#b037e7" : "none")};
  padding: ${props => (props.outline ? "0.4rem 0.8rem" : "0.55rem 0.95rem")};
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-right: 0.8rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:hover {
    background-color: ${props => (props.gradient ? "#fa7dcf" : "none")};
    background: ${props => (props.gradient ? "#b037e7" : "none")};
    border-color: ${props => (props.outline ? "#fa7dcf" : "none")};
    color: ${props => (props.outline ? "#fa7dcf" : "#fff")};
    text-decoration: none;
  }
  &:focus {
    outline: 0;
  }
`

export default ({ children }) => (
  <>
    <Global styles={globalStyles} />
    <Header>
      <Navbar>
        <Link css={brand} to="/">
          <img src={`../../imagotipo.svg`} height="60" alt="" />
        </Link>
        <Collapse>
          <Nav>
            <Link to="/">Inicio</Link>
            <Link to="/">Servicios</Link>
            <Link to="/">Nosotros</Link>
            <Link to="/">Portafolio</Link>
            <Link to="/">Contacto</Link>
          </Nav>
        </Collapse>
      </Navbar>
      <Container>
        <HeaderContent>
          <Badge>Diseño y Desarrollo Web</Badge>
          <h1>Creamos la página que deseas</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dicta
            provident consectetur culpa, fugit quis rerum. Sequi ipsa ab nam
            voluptatum modi. Possimus obcaecati voluptates sequi reiciendis
            eligendi animi sit!
          </p>
          <br />
          <Button gradient role="button">
            Contáctanos
          </Button>
          <Button outline role="button">
            Saber más
          </Button>
        </HeaderContent>
      </Container>
      <div css={css`width: 100%; align-self: flex-end`}>
        <p>Siguenos en -</p>
      </div>
    </Header>
    {children}
  </>
)
