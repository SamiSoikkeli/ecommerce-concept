import React from 'react'
import styled from 'styled-components'
import {mobile} from "../utils/responsive";

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;

    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);

    &:hover {
      filter: none;
        -webkit-filter: grayscale(0);
    }
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    object-fit: cover;
    ${mobile({ height: "20vh" })}
`

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.h1`
    font-size: 2.5rem;
    color: white;
    margin-bottom: 20px;
`

const Button = styled.button`
    padding: 0.678rem 3rem;
    font-size: 16px;
    color: white;
    background-color: transparent;
    border-radius: 1rem;
    border: 1px solid white;
    cursor: pointer;

    &:hover {
        background-color: white;
        color: black;
    }
`

const CategoryItem = ({item}) => {
    return (
      <Container>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Container>
    );
  };

  export default CategoryItem