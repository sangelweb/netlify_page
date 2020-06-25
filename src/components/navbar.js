import React, { Component } from "react"
import styled from "@emotion/styled"
import RightNavbar from '../components/right-navbar';

const NavbarWrapper = styled('div')`
  #navbar {
    position: fixed;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 26px 42px;
    width: 100%;
    z-index: 20;
    transition: all 0.3s ease-out;
  }

  #navbar.scrolled {
    padding: 12px 42px;
    background-color: rgba(0, 0, 0, .8);
  }
  
  a {
    color: white;
    text-decoration: none;
  }

  .brand {
    font-family: norwester, sans-serif;
    font-size: 34px;

    span {
      color: var(--primary);
    }
  }

  .navbar-nav {
    display: flex;
    list-style: none;
    margin: 0;
  }

  .nav-item {
    margin: 0 10px;
  }

  .nav-link {
    padding: 10px 20px;
  }

  .nav-link:hover {
    color: var(--primary);
  }

  .nav-link.active {
    border-bottom: 3px solid var(--primary);
  }

  .nav-btn {
    color: white;
    background: var(--primary);
    padding: 10px 20px;
  }

  @media (max-width: 992px) {
    .collapse {
      display: none;
    }
  }
`

class Navbar extends Component {
	componentDidMount() {
		window.addEventListener('scroll', () => {
			const isTop = window.scrollY;
			const nav = document.getElementById('navbar');
			let navLinks = document.querySelectorAll(".nav-link");
			
			navLinks.forEach((link) => {
				let section = document.querySelector(link.hash);

				if (
					section.offsetTop <= isTop &&
					section.offsetTop + section.offsetHeight > isTop
				) {
					link.classList.add("active");
				} else {
					link.classList.remove("active");
				}
			});

			if (isTop > 100) {
				nav.classList.add('scrolled');
			} else {
				nav.classList.remove('scrolled');
			}
		});
	}

	componentWillUnmount() {
		window.removeEventListener('scroll');
	}

	render() {
	  return (
      <NavbarWrapper>
        <nav id="navbar">
          <a href="/" className="brand">Sangel<span>Web.</span></a>
          <ul className="navbar-nav collapse">
            <li className="nav-item">
              <a href="#header" className="nav-link active">Inicio</a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link">Servicios</a>
            </li>
            <li className="nav-item">
              <a href="#aboutUs" className="nav-link">Nosotros</a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link">Portafolio</a>
            </li>
          </ul>
          <a href="#contact" className="nav-btn collapse">Contáctenos</a>
          <RightNavbar />
        </nav>
      </NavbarWrapper>
	  );
	}
}

export default () => (
  <>
    <Navbar />
  </>
)