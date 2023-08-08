import React from 'react'
import styled from 'styled-components'
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AdidasProducts } from '../../Products/AdidasProducts';

const SingleAdidasShoe = ({name, gender, brand, imageURL,price, addToCart, adidasProduct}) => {

  const styles = {
    padding: "1rem",
    fontSize: "2rem",
    color: "red",
  }
  return (
    <ProductContainer>

      <div className='ProductDetail'>
        <img src={ imageURL } alt="/" />
          <div className='ProductDetailSection'>
            <div>
              <p>{gender}</p>
              <div className='name'>
                <h2>{brand} {name}</h2> 
              </div>
              <p>{price}</p>
            </div>

            <div className='icons'>
              <button ><AiOutlineHeart style = {styles}/></button>
              <button onClick={() => addToCart(adidasProduct)}><AiOutlineShoppingCart style = {styles}/></button>
          </div>
        </div>      
      </div>
      
    </ProductContainer>
  )
}

const ProductContainer = styled.div`
  padding: 5px;
  width: 450px;
  margin: 10px;
  text-align: center;
  font-family: 'Press Start 2P', cursive;
  font-size: 1rem;
  .ProductDetail{
    border: transparent;
  }
  .ProductDetailSection{
    display: flex;
    justify-content: space-around;
    border: 3px solid red;
  }
  .icons{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  img{
    width: 100%;
    height: 50vh;
  }
  .name{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button{
    margin: .5rem;
    background-color: transparent;
    border: transparent;
  }
`

export default SingleAdidasShoe
