import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: #2f3640;
  z-index: 9;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 120px;
  height: 50px;
  text-align: center;
  transition: border-bottom 0.5s ease-in-out;
  border-bottom: 4px solid
    ${(props) => (props.current ? "#e84393" : "transparent")};
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
`;

const SLinkLogo = styled(SLink)`
  color: #e84393;
  font-weight: 900;
  font-size: 20px;
`;

const Header = (props) => {
  const { pathname } = props.location;

  return (
    <Nav>
      <List>
        <Item current={pathname === "/"}>
          <SLinkLogo to="/">Gotcha!!</SLinkLogo>
        </Item>
        <Item current={pathname === "/tv"}>
          <SLink to="/tv">TV</SLink>
        </Item>
        <Item current={pathname === "/search"}>
          <SLink to="/search">Search</SLink>
        </Item>
      </List>
    </Nav>
  );
};

export default withRouter(Header);
