import React from 'react'
import styled from 'styled-components'
import { CgProfile } from 'react-icons/cg';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';


const NavBar = () => {
  const styles = {
    padding: "1rem",
    fontSize: "2rem",
    color: "white",
}
  return (
    <div>
      <Container>
        <div>
          <h1>Sneakers</h1>
        </div>
        <div className='icons'>
          <CgProfile style = {styles}/>
          <AiOutlineHeart style = {styles}/>
          <AiOutlineShoppingCart style = {styles}/>
        </div>
      </Container>
    </div>
  )
}

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    position: fixed;
    width: 100%;
    background-color: black;
    color: white;
    height: 10vh;

    h1{
      font-family: 'Press Start 2P', cursive;
    }
    .icons{
      display: flex;
    justify-content: space-around;
    align-items: center;
      padding-left: 1rem;
    }
`

export default NavBar
