
import Logo from "../assets/Logo.svg";
import Search from "../assets/search.png";
import { useState } from 'react';
import "./navbar.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar className="navbar" light expand="md">
        <NavbarBrand className=" logo" href="/"><img src={Logo} alt="logo" /></NavbarBrand>
        <NavbarToggler className="menu" onClick={toggle} />
        <Collapse className="menu-item" isOpen={isOpen} navbar>
          <Nav className="mr-auto groups-nav" navbar>

            <NavItem className="home">
              <NavLink href="/">Home</NavLink>
            </NavItem>

            <NavItem className="about">
              <NavLink href="/about">About</NavLink>
            </NavItem>
              
            <NavItem className=" feature">
              <NavLink href="#">Features</NavLink>
            </NavItem>
            
            <NavItem className="princing">
              <NavLink href="#">Pricing</NavLink>
            </NavItem>

            <NavItem className=" gallery">
              <NavLink href="#">Gallery</NavLink>
            </NavItem>

            <NavItem className=" team">
              <NavLink href="#">Team</NavLink>
            </NavItem>

            <NavItem className=" search">
              <NavLink href="#"><img src={Search}  alt="Search"/></NavLink>
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>
      <hr className="divider"/>
    </div>
  );
}

export default Menu;