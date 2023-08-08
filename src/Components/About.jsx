import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <div className="about">
        <h1>
          Sneakers<span>&#128095;</span>
        </h1>
        <p>
          Welcome to our website, the ultimate destination for second-hand
          sneakers. We are passionate about sneakers and believe that every pair
          deserves a second chance. Our mission is to provide sneaker
          enthusiasts with a wide selection of premium second-hand sneakers at
          affordable prices, while promoting sustainability and reducing waste
          in the fashion industry.
          <br></br>
          At SneakerLand, we carefully curate and inspect every pair of sneakers
          before listing them for sale. We work with trusted sellers to ensure
          that all sneakers are authentic and in excellent condition. Our team
          of sneaker experts is dedicated to providing a seamless shopping
          experience and helping you find the perfect pair.
        </p>
      </div>
      <div className="values">
        <h1>Our Values</h1>
        <ul>
          <li>Authenticity</li>
          <li>Quality</li>
          <li>Sustainability</li>
          <li>Customer Satisfaction</li>
        </ul>
      </div>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  font-size: 2rem;
  font-family: "Press Start 2P", cursive;
  margin-bottom: 1rem;

  .about {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 2rem;
  }
  .values {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap ;
    list-style-type: none;
    width: 100%;

    li {
      font-size: 1.5rem;
      margin-top: 2rem;
    }
  }

  h1 {
    font-family: "Press Start 2P", cursive;
    color: red;
  }
`;

export default About;
