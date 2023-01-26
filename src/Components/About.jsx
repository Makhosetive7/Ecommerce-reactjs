import React from 'react'
import styled from 'styled-components'

const About = () => {
  return (
    <Container>
        <h1>Sneakers<span>&#128095;</span></h1>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio dolor quis aliquid vitae earum perspiciatis suscipit debitis quia voluptatibus, at natus labore laboriosam ipsa commodi impedit magnam quod incidunt. Quia.
            Temporibus, neque. Voluptatem labore fuga nobis commodi et corporis assumenda perferendis debitis eaque aliquid soluta mollitia blanditiis dolorem modi fugit quasi illum nam praesentium, excepturi, tempora dolorum quia. Sit, totam?
            Nam doloremque quibusdam culpa quo vitae dolores maxime eum sapiente id voluptate, labore eveniet explicabo soluta! Dolores minima impedit optio. Vitae fugiat aliquid possimus dolores impedit odio optio ducimus illum.
            Debitis ea rem placeat fugiat dignissimos neque sint illo velit nam recusandae optio, natus ad? Dignissimos aperiam enim facilis eligendi ex facere molestiae laboriosam aliquid temporibus quod, provident corporis ea.
            nctio aliquam quae placeat similique odit obcaecati quod facilis modi atque, vero doloremque, sed reprehenderit? Esse, blanditiis qui!
        </p>
      
    </Container>
  )
}
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap-reverse;
    flex-direction: column;
    font-size: 2rem;
    margin-left: 15rem;
    margin-right: 15rem;
    font-family: 'Beth Ellen', cursive;

    h1{
      font-family: 'Press Start 2P', cursive;
      color: red;
    }
`

export default About
