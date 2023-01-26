import React from 'react'
import { PumaProducts } from '../../Products/PumaProducts'
import SinglePumaShoe from './SinglePumaShoe'
import styled from 'styled-components'

const PumaPage = () => {
  return (
    <Container>
      {
        PumaProducts.map(({id, name, gender,imageURL,price}) => {
          return(
            <SinglePumaShoe
              name = {name}
              gender = { gender }
              imageURL = {imageURL}
              price = {price}
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

export default PumaPage
