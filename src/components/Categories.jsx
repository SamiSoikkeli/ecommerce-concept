import React from 'react'
import styled from 'styled-components'
import { categories } from '../data';
import CategoryItem from './CategoryItem';
import {mobile} from "../utils/responsive";
import AnimatedElements from './animations/AnimatedElements';

const Container = styled.div`
    display: flex;
    padding: 20px;
    margin-bottom: 5rem;
    justify-content: space-between;
    ${mobile({ padding: "0px", flexDirection:"column" })}
`

const Categories = () => {
    return (
      <AnimatedElements>
        <Container>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Container>
      </AnimatedElements>

    )
  }

export default Categories