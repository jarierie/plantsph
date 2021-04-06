import React from "react";
import styled from "styled-components";

const ArticleContainer = styled.div`
  max-width: 60%;
  margin: 50px auto;
  flex-direction: ${(props) =>
    props.theme === "theme" ? "row-reverse" : "row"};
  display: flex;
  width: 60%;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  max-width: 90%;
  width: 400px;
  height: 500px;
  background-color: grey;
`;

const TextContainer = styled.div`
  max-width: 100%;
  margin-top: 20px;
  width: 350px;
  height: 200px;

  position: relative;

  h1 {
    font-weight: 400;
    font-size: 2em;
  }
  p {
    font-weight: 200;
    font-size: 1em;
  }
  button {
    position: absolute;
    width: 100px;
    height: 30px;
    right: 0;
    border: none;
    transition: 0.7s ease-out;
    :hover {
      background-color: green;
    }
  }
`;

const FeatureArticle = () => {
  return (
    <>
      <ArticleContainer>
        <ImageContainer />
        <TextContainer>
          <h1>Ang ganda ng plants o</h1>
          <p>
            Sample text lang lorem ipsum grabe eh no wala naakong ma type basta
            sample lang to hahaha nabasa mo ba hanggang dito ok Salamat thanks
            for coming to my ted talk.
          </p>
          <button>See more</button>
        </TextContainer>
      </ArticleContainer>
      <ArticleContainer theme='theme'>
        <ImageContainer />
        <TextContainer>
          <h1>Ang ganda ng plants o</h1>
          <p>
            Sample text lang lorem ipsum grabe eh no wala naakong ma type basta
            sample lang to hahaha nabasa mo ba hanggang dito ok Salamat thanks
            for coming to my ted talk.
          </p>
          <button>See more</button>
        </TextContainer>
      </ArticleContainer>
    </>
  );
};

export default FeatureArticle;
