import React from 'react'
import styled from 'styled-components'
import Product from "./Product"
import { testProducts } from "../data"
import AnimatedElements from './animations/AnimatedElements'

const Container = styled.div`
    padding: 1.25rem 0rem 10rem 0rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow: hidden;
`
const Products = () => {
  return (
    <AnimatedElements>
      <Container>
        {testProducts.map((item)=> (
            <Product item={item} key={item.id} />
        ))}
      </Container>
    </AnimatedElements>
  )
}

export default Products