import React, { Component } from "react";
import { Nav, Navbar, NavItem, NavLink } from "reactstrap";

const TopNav = () => {
  return (
    <div>
      <Navbar color="primary">
        <Nav>
          <h3>Welcome</h3>
          <NavItem>
            <NavLink href="/components/">Components</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">
              GitHub
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};
export default TopNav;
