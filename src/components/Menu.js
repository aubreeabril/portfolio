import React, { Component } from "react";
import { Navbar, NavItem, Nav, NavbarBrand, NavLink } from "reactstrap";

class Menu extends Component {
  render() {
    return (
      <Navbar sticky="top">
        <Nav>
          <NavbarBrand href="/#aa">
            <strong>AA</strong>
          </NavbarBrand>
          <NavItem>
            <strong>
              <NavLink href="/#about">About</NavLink>
            </strong>
          </NavItem>
          <NavItem>
            <strong>
              <NavLink href="/#projects">Projects</NavLink>
            </strong>
          </NavItem>
          <NavItem>
            <strong>
              <NavLink href="/blog">Blog</NavLink>
            </strong>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Menu;
