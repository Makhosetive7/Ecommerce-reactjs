import React from 'react'
import { AdidasProducts } from '../../Products/AdidasProducts'
import SingleAdidasShoe from './SingleAdidasShoe'
import styled from 'styled-components'

const AdidasPage = () => {
  return (
    <Container>
      {
        AdidasProducts.map(({id, name, gender, imageURL, price}) => {
          return(
            <SingleAdidasShoe key={id}
               name = {name}
               gender ={ gender}
               imageURL = { imageURL }
               price ={ price }
            />
          )
        })
      }
      
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
export default AdidasPage
