import React from "react";
import { Card, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="mr-5">
      <Card className="m-2 p-5" color="light">
        <p>Navigation, Yo</p>
        <Nav vertical>
          <NavItem>
            <NavLink to="/homepage">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/profile/16">Profile</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/friends">Friends</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/conversations">Conversations</NavLink>
          </NavItem>
        </Nav>
      </Card>
    </div>
  );
};

export default SideNav;
