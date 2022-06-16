import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`

const Container = styled.div`
    flex: 1;
    margin: 0.5rem;
    min-width: 350px;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 1rem;
    overflow: hidden;

    &:hover ${Info}{
        opacity: 1;
    }
`

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`

const Image = styled.img`
    height: 100%;
    z-index: 2;
    border-radius: 1rem;
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: transparent;
    border: 1px solid white;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;

    &:hover {
        color: black;
        background-color: white;
        transform: scale(1.1);
    }
`

const ProductDetails = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: absolute;
    z-index: 4;
    bottom: 0;
    margin-bottom: 1rem;
    color: white;
    font-size: 1.15rem;
`

const Title = styled.div`
    font-weight: 400;
`

const Price = styled.div`
    font-weight: 200;
`

const Product = ({item}) => {
    return (
        <Container>
            <Link to={`/products/${item.id}`}>
                <Circle />
                <Image src={item.img}/>
                <Info>
                    <Icon>
                        <ShoppingCartOutlined />
                    </Icon>
                    <Icon>
                        <SearchOutlined />
                    </Icon>
                    <Icon>
                        <FavoriteBorderOutlined />
                    </Icon>
                </Info>
            </Link>
            <ProductDetails>
                    <Title>
                        {item.title}
                    </Title>
                    <Price>
                        {item.price}
                    </Price>
                </ProductDetails>
        </Container>
    )
}

export default Product