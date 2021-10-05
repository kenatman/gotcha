import React, { Component } from "react";
import { Link } from "react-router-dom";
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

class Header extends Component {
  render() {
    return (
      <Nav>
        <List>
          <Item>
            <SLinkLogo to="/">Gotcha!!</SLinkLogo>
          </Item>
          <Item>
            <SLink to="/tv">TV</SLink>
          </Item>
          <Item>
            <SLink to="/search">Search</SLink>
          </Item>
        </List>
      </Nav>
    );
  }
}

export default Header;
