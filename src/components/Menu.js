import React, { Component } from "react";
import { Navbar, NavItem, Nav, NavbarBrand, NavLink } from "reactstrap";
// added portfolio to links for gh-pages
class Menu extends Component {
  render() {
    return (
      <Navbar sticky="top">
        <Nav>
          <NavbarBrand href="/portfolio/#aa">
            <strong>AA</strong>
          </NavbarBrand>
          <NavItem>
            <strong>
              <NavLink href="/portfolio/#about">About</NavLink>
            </strong>
          </NavItem>
          <NavItem>
            <strong>
              <NavLink href="/portfolio/#projects">Projects</NavLink>
            </strong>
          </NavItem>
          <NavItem>
            <strong>
              <NavLink href="/portfolio/blog">Blog</NavLink>
            </strong>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Menu;

//<NavItem>
//  <strong>
//    <NavLink href="/portfolio/blog">Blog</NavLink>
//  </strong>
//</NavItem>
