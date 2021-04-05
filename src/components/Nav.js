import React from "react";
import styled from "styled-components";

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
`;

const Nav = () => {
  return (
    <NavBar>
      <NavContainer>
        <Menu>Menu</Menu>
      </NavContainer>
      <NavContainer>
        <Logo>PlantsPH</Logo>
      </NavContainer>
      <NavContainer>
        <ShopCart>Shop</ShopCart>
        <ShopCart>Cart</ShopCart>
      </NavContainer>
    </NavBar>
  );
};

export default Nav;
