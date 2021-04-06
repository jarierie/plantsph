import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import CardItem from "../components/CardItem";
import FeatureArticle from "../components/FeatureArticle";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <CardItem />
      <FeatureArticle />
      <Footer />
    </>
  );
};

export default Home;
