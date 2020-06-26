import React, { useState } from 'react'
import styled from '@emotion/styled'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'

const RightNavbarWrapper= styled('div')`
  .right-navbar {
    position: fixed;
    list-style: none;
    padding-top: 92px;
    background-color: rgba(0, 0, 0, .8);
    width: 250px;
    height: 100vh;
    top: 0;
    right: ${({ open }) => open ? '0' : '-250px'};
    display: flex;
    flex-direction: column;
    z-index: 30;
    transition: all .3s ease-out;
  }

  .right-nav-item {
    display: flex;
    flex-direction: column;
  }

  .right-nav-link {
    color: white;
    padding: 20px 42px;
  }

  .right-nav-link:hover {
    background-color: var(--primary);
  }

  @media (min-width: 992px) {
    display: none;
  }
`

const NavbarBtn = styled('button')`
  position: relative;
  color: white;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 50;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:focus {
    outline: 0;
  }
`

const RightNavbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <RightNavbarWrapper open={open}>
      <NavbarBtn open={open} onClick={() => setOpen(!open)}>
        <MenuRoundedIcon fontSize="large" />
      </NavbarBtn>
      <ul className="right-navbar">
        <li className="right-nav-item">
          <a href="#header" className="right-nav-link active">Inicio</a>
        </li>
        <li className="right-nav-item">
          <a href="#services" className="right-nav-link">Servicios</a>
        </li>
        <li className="right-nav-item">
          <a href="#aboutUs" className="right-nav-link">Nosotros</a>
        </li>
        <li className="right-nav-item">
          <a href="#portfolio" className="right-nav-link">Portafolio</a>
        </li>
        <li className="right-nav-item">
          <a href="#contact" className="right-nav-link">Contáctenos</a>
        </li>
      </ul>
    </RightNavbarWrapper>
  )
}

export default RightNavbar