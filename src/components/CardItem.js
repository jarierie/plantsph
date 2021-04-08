import React from "react";
import styled from "styled-components";
import { itemList } from "../data/itemList";
import { motion } from "framer-motion";

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
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;

const CardItemName = styled.p`
  font-size: 0.8em;
  margin: 10px;
  font-weight: 500;
`;

const CardItemPrice = styled.p`
  font-weight: 400;
  font-size: 0.8em;
  margin: 10px;
`;

const CardItem = () => {
  return (
    <>
      <CardContainer>
        <Heading>Explore New Arrivals</Heading>
        <ItemContainer>
          {itemList.map((data) => {
            return (
              <Card key={data.id}>
                <CardImgContainer image={data.imageUrl}>
                  <motion.img
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.5 },
                    }}
                    src={data.imageUrl}
                    alt=''
                  />
                </CardImgContainer>
                <CardItemName>{data.name}</CardItemName>
                <CardItemPrice>{data.price}</CardItemPrice>
              </Card>
            );
          })}
        </ItemContainer>
      </CardContainer>
    </>
  );
};

export default CardItem;
