import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar = styled.div`
  width: 75%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  margin: auto;
`;

const NavContainer = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
`;

const Menu = styled.a`
  font-size: 1.2em;
`;

const Logo = styled.a`
  font-size: 2em;
  color: green;
`;

const ShopCart = styled.a`
  margin-right: 10px;
  font-size: 1.2em;
  text-decoration: none;
  a {
    text-decoration: none;
  }
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const Nav = () => {
  return (
    <NavBar>
      <NavContainer>
        <Menu>Menu</Menu>
      </NavContainer>
      <NavContainer>
        <StyledLink to='/'>
          <Logo>PlantsPH</Logo>
        </StyledLink>
      </NavContainer>
      <NavContainer>
        <StyledLink to='/shop'>
          <ShopCart>Shop</ShopCart>
        </StyledLink>
        <StyledLink to='/cart'>
          <ShopCart>Cart</ShopCart>
        </StyledLink>
      </NavContainer>
    </NavBar>
  );
};

export default Nav;
