import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const SideNav = () => {
  return (
    <div className="mr-5">
      <p className="mt-2">Navigation, Yo</p>
      <Nav vertical>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">
            Disabled Link
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default SideNav;
