import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  margin: 10px auto;
  width: 60%;
  background-color: #edece9;
  padding: 10px;

  min-width: 50%;
  @media (max-width: 768px) {
    width: 90%;
    
    margin: auto;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
`;

const Heading = styled.h1`
  font-size: 1.5em;
  font-weight: 400;
  margin: auto;
`;

const Card = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  display: inline;
  transition: 0.8s;
  margin: auto;
  margin-top: 20px;
  :hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;
const CardImgContainer = styled.div`
  max-width: 100%;
  width: 300px;
  height: 400px;
  background-color: #e8e6e7;
`;

const CardItemName = styled.p`
  font-size: 0.8em;
  margin: 10px;
  font-weight: 400;
`;

const CardItemPrice = styled.p`
  font-weight: 200;
  font-size: 1em;
  margin: 10px;
`;

const CardItem = () => {
  return (
    <>
      <CardContainer>
        <Heading>Explore New Arrivals</Heading>
        <ItemContainer>
          <Card>
            {" "}
            <CardImgContainer />
            <CardItemName>Sarap naman non</CardItemName>{" "}
            <CardItemPrice>₱50.00</CardItemPrice>
          </Card>
          <Card>
            {" "}
            <CardImgContainer />
            <CardItemName>Mukbang</CardItemName>{" "}
            <CardItemPrice>₱28.00</CardItemPrice>
          </Card>
          <Card>
            {" "}
            <CardImgContainer />
            <CardItemName>Mukbang</CardItemName>{" "}
            <CardItemPrice>₱28.00</CardItemPrice>
          </Card>
          <Card>
            {" "}
            <CardImgContainer />
            <CardItemName>Mukbang</CardItemName>{" "}
            <CardItemPrice>₱28.00</CardItemPrice>
          </Card>
          <Card>
            {" "}
            <CardImgContainer />
            <CardItemName>Sarap naman non</CardItemName>{" "}
            <CardItemPrice>₱50.00</CardItemPrice>
          </Card>
          <Card>
            {" "}
            <CardImgContainer />
            <CardItemName>Mukbang</CardItemName>{" "}
            <CardItemPrice>₱28.00</CardItemPrice>
          </Card>
          <Card>
            {" "}
            <CardImgContainer />
            <CardItemName>Mukbang</CardItemName>{" "}
            <CardItemPrice>₱28.00</CardItemPrice>
          </Card>
          <Card>
            {" "}
            <CardImgContainer />
            <CardItemName>Mukbang</CardItemName>{" "}
            <CardItemPrice>₱28.00</CardItemPrice>
          </Card>
        </ItemContainer>
      </CardContainer>
    </>
  );
};

export default CardItem;
