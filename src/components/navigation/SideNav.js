import React, { Component } from "react";
import { Card, Nav, NavItem, NavLink } from "reactstrap";

const SideNav = () => {
  return (
    <div className="mr-5">
      <Card className="m-2 p-5" color="light">
        <p>Navigation, Yo</p>
        <Nav vertical>
          <NavItem>
            <NavLink href="#">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Profile</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Friends</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">
              Photos
            </NavLink>
          </NavItem>
        </Nav>
      </Card>
    </div>
  );
};

export default SideNav;
