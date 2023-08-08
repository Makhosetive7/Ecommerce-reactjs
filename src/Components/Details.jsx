import React from "react";
import styled from "styled-components";
import { TfiTruck } from "react-icons/tfi";
import { MdOutlinePayment } from "react-icons/md";
import { RiTimeLine } from "react-icons/ri";

const Details = () => {
  const styles = {
    border: "3px solid black",
    padding: "1rem",
    margin: "1.5rem",
    fontSize: "5rem",
    color: "black",
  };

  return (
    <div>
      <Container>
        <div className="iconContainer1">
          <div className="icons">
            <TfiTruck style={styles} />
          </div>
          <p>
            Free delivery with DHL anywhere in the world on orders over 200€.
            Free return from the EU, 29€ otherwise.All our products are limited
            to 500 units, numbered by order of production.
          </p>
        </div>
        <div className="iconContainer2">
          <div className="icons">
            <MdOutlinePayment style={styles} />
          </div>
          <p>
            All our products are limited to 500 units, numbered by order of
            production.
          </p>
        </div>
        <div className="iconContainer3">
          <div className="icons">
            <RiTimeLine style={styles} />
          </div>
          <p>
            All our products are limited to 500 units, numbered by order of
            production.
          </p>
        </div>
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  margin-left: 5rem;
  margin-right: 5rem;
  font-family: "Press Start 2P", cursive;
  .iconContainer1 {
    grid-column-start: 1;
    grid-column-end: 3;
    .icons {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
  }
  .iconContainer2 {
    grid-column-start: 3;
    grid-column-end: 5;
    .icons {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
  }
  .iconContainer3 {
    grid-column-start: 5;
    grid-column-end: 7;
    .icons {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
  }
  @media screen and (max-width: 900px) {
    .iconContainer1 {
      grid-column-start: 1;
      grid-column-end: 4;
    }
    .iconContainer2 {
      grid-column-start: 4;
      grid-column-end: 7;
    }
    .iconContainer3 {
      grid-column-start: 1;
      grid-column-end: 7;
    }
  }
  @media screen and (max-width: 600px) {
    .iconContainer1 {
      grid-column-start: 1;
      grid-column-end: 7;
    }
    .iconContainer2 {
      grid-column-start: 1;
      grid-column-end: 7;
    }
    .iconContainer3 {
      grid-column-start: 1;
      grid-column-end: 7;
    }
  }
  div {
    display: block;
    justify-content: space-around;
    align-items: center;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
`;

export default Details;
