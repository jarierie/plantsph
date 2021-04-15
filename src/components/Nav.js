import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = styled.div`
  width: 75%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  margin: auto;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 2em;
  color: green;
`;

const StyledLink = styled(Link)`
  font-size: 1.2em;
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

const List = styled.div``;

const Nav = () => {
  const cartLength = useSelector((state) => state.cart);
  console.log(cartLength.length);
  return (
    <NavBar>
      <StyledLink to='/'>
        <Logo>PlantsPH</Logo>
      </StyledLink>
      <List>
        <StyledLink to='/shop'>Shop</StyledLink>
        <StyledLink to='/cart'> Cart</StyledLink>
      </List>
      <h1>{cartLength.length} items on Cart</h1>
    </NavBar>
  );
};

export default Nav;
