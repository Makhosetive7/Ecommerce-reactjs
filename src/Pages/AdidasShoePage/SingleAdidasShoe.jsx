import React from 'react'
import styled from 'styled-components'
import { CgProfile } from 'react-icons/cg';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const SingleAdidasShoe = ({name, gender, brand, imageURL,price}) => {

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
              <CgProfile style = {styles}/>
              <AiOutlineHeart style = {styles}/>
              <AiOutlineShoppingCart style = {styles}/>
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
`

export default SingleAdidasShoe
