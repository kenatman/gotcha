import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.header`
  background-color: yellow;
`;

const List = styled.ul``;

const Item = styled.li``;

const SLink = styled(Link)``;

class Header extends Component {
  render() {
    return (
      <Nav>
        <List>
          <Item>
            <SLink to="/">Movies</SLink>
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
