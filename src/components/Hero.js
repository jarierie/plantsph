import React from "react";
import styled from "styled-components";
import heroImg2 from "../assets/images/heroImg2.jpg";

const HeroContainer = styled.div`
  margin: 20px auto;
  max-width: 80%;
  min-height: 400px;
  width: 1000px;
  height: 400px;
  background: url(${heroImg2});
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    width: 70%;
    height: 100px;

    margin: auto;
  }
`;

const Hero = () => {
  return <HeroContainer />;
};

export default Hero;
