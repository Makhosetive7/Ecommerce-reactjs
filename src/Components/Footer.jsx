import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Container>
      <div>
        <h1>Usefull Staff</h1>
            <ul>
                <li>Payment</li>
                <li>Delivering</li>
                <li>Returns</li>
                <li>Stores</li>
            </ul>
      </div>
      <div>
        <h1>Other stuff</h1>
            <ul>
                <li>About us</li>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Whatsapp</li>
            </ul>
      </div>
      <div>
        <h1>Contact us</h1>
            <ul>
                <li>Bulawayo shop</li>
                <li>8th Av & Jason Moyo</li>
                <li>Bulawayo</li>
                <li>Zimbabwe</li>
            </ul>
      </div>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 3rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
    border-top: 2px solid black;
    font-family: 'Press Start 2P', cursive;

    div{
      margin: 2rem;

      h1{
        color: red;
      }
      ul{
        list-style-type: none;
      }
      li{
        padding: 1rem;
      }
    }

    

`

export default Footer
