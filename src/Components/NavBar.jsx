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
        <div class="form__group">
          <input type="text" class="form__input" id="name" placeholder="Search" />
          <label for="name" class="form__label">typing</label>
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
    width: 100%;
    background-color: black;
    color: white;

    h1{
      font-family: 'Press Start 2P', cursive;
    }

    .form__group{
      margin-top: 2rem;
      width: 30vw;
      margin-bottom: 2rem;
    }
    .form__label {
      font-family: 'Press Start 2P', cursive;
      font-size: 1.2rem;
      margin-top: 1.5rem;
      transition: all 0.3s;
      transform: translateY(0rem);
    }

    .form__input {
      font-family: 'Press Start 2P', cursive;
      padding: 1rem;
      color: #333;
      border-radius: 0.2rem;
      background-color: rgb(255, 255, 255);
      border: none;
      width: 100%;
      display: block;
      border-bottom: 0.3rem solid transparent;
      transition: all 0.3s;
      margin-top: 1.5rem;
    }

    .form__input:placeholder-shown + .form__label {
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      visibility: hidden;
      -webkit-transform: translateY(-4rem);
      transform: translateY(-4rem);
    }


    .icons{
      padding-left: 1rem;
    }
`

export default NavBar
