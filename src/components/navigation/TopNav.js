import React, { Component } from "react";
import { Nav, Navbar, NavItem, NavLink, Button, Badge } from "reactstrap";

const TopNav = () => {
  return (
    <div>
      <Navbar color="secondary">
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
          <NavItem>
            <Button color="dark" outline>
              Notifications
              <Badge className="m-1" color="danger">
                4
              </Badge>
            </Button>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};
export default TopNav;
