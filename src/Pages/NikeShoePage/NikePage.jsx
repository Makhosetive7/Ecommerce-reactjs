import React from 'react'
import { NikeProducts } from '../../Products/NikeProducts'
import SingleNikeShoe from './SingleNikeShoe' 
import styled from 'styled-components'

const NikePage = () => {
  return (
    <Container>
        {
            NikeProducts.map(({id ,name,  gender,imageURL,price}) => {
                return(
                    <SingleNikeShoe key={id}
                        name = { name }
                        gender = { gender }
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
export default NikePage
