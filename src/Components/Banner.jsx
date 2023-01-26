import React from 'react'
import styled from 'styled-components'
import { MdOutlineAdsClick } from 'react-icons/md';

const Banner = () => {
    const image1 = 'https://images.pexels.com/photos/4906157/pexels-photo-4906157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    const image2 = 'https://images.pexels.com/photos/987580/pexels-photo-987580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

    const styles = {
      fontSize: "2rem",
      color: "red",
  }
  return (
    <Container>
      <div className='male'>
        <img src={image1} alt="/" />
        <button>Male Category <MdOutlineAdsClick style = {styles}/></button>
      </div>
      <div className='female'>
        <button>Female Category <MdOutlineAdsClick style = {styles}/></button>
        <img src={image2} alt="/" />
        
      </div>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    grid-gap: 5rem;
    

    .male{
      display: flex;
      flex-direction: column;
      
    }
    .female{
      display: flex;
     flex-direction: column;
    }
    
    button{
      font-size: 1.2rem;
      padding: 1rem;
      font-family: 'Press Start 2P', cursive;
      color: red;
    }
  
    }


`
export default Banner
