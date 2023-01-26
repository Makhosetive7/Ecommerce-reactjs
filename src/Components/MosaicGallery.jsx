import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import { device } from '../Device';
import { MdOutlineAdsClick } from 'react-icons/md';

const MosaicGallery = () => {
  const image1 = 'https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/90f85768e3894aeaab67aba0014a3379_9366/NMD_R1_Shoes_Red_FY9389_01_standard.jpg';
  const image2 = 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg';
  const image4 = 'https://cdn.runrepeat.com/i/puma/37428/puma-women-s-pacer-future-sneaker-eggnog-white-rose-gold-8-5-eggnog-puma-white-rose-gold-216d-600.jpg';
  const image5 = 'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  
  const styles = {
    fontSize: "2rem",
    color: "red",
}

  return (
    <Container>
        <article>
          <div className='one'>
            <img src={image1} alt="" />
            <NavLink to='/adidasPage'> <button>Adidas <MdOutlineAdsClick style = {styles}/></button> </NavLink>
          </div>
          <div className='two'><
            img src={image2} alt="" />
            <NavLink to='/nikePage'> <button>Nike <MdOutlineAdsClick style = {styles}/></button> </NavLink>
          </div>
          <div className='four'>
            <img src={image4} alt="" />
            <NavLink to='/pumaPage'><button>Puma <MdOutlineAdsClick style = {styles}/></button></NavLink>
          </div>
          <div className='five'>
            <img src={image5} alt="" />
            <NavLink to='/varietyPage'><button>Variaty <MdOutlineAdsClick style = {styles}/></button></NavLink>
          </div>
        </article>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
	line-height: 0;
  margin-top: 1rem;
 
  article{
    width: 100%;
    background: black;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    mix-blend-mode: lighten;

    .one{
      grid-column-start: 1;
      grid-column-end: 3;

      img{
        object-fit: cover;
      }
    }

    .five{
      grid-column-start: 1;
      grid-column-end: 5;
    }
    
  img{
    width: 100%;
    height: 20vw;

  }

  button{
        display: flex ;
        justify-content: center;
        align-items: center;
        width: 100%;
        font-size: 1.2rem;
        padding: 0.3rem;
        font-family: 'Press Start 2P', cursive;
        color: red;
      }

    @media ${device.tablet} {
    .one{
      grid-column-start: 1;
      grid-column-end: 5;
    }
    .two{
      grid-column-start: 1;
      grid-column-end: 5;
    }
    .three{
      grid-column-start: 1;
      grid-column-end: 5;
    }
    .four{
      grid-column-start: 1;
      grid-column-end: 5;
    }
    .five{
      grid-column-start: 1;
      grid-column-end: 5;
    }

    img{
          width: 100%;
          height: 65vh;
        }
  }

  }




`

export default MosaicGallery
