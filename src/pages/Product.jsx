import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import {mobile} from "../utils/responsive";
import { testProducts } from '../data'
import AnimatedPage from '../components/animations/AnimatedPage'
import { useParams } from "react-router-dom"

const Container = styled.div`

`

const Wrapper = styled.div`
    padding: 3.125rem;
    display: flex;
    ${mobile({ padding: "3rem 0.625rem", flexDirection:"column" })}
`

const ImgContainer = styled.div`
    flex: 2;
`

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({ height: "40vh" })}
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0rem 5rem;
    ${mobile({ padding: "10px" })}
`

const Title = styled.h1`
    font-weight: 600;
    font-size: 4rem;
    margin-bottom: 1rem;
`

const Description = styled.p`
    margin: 1rem 0rem;
`

const Price = styled.span`
    font-weight: 400;
    font-size: 1.25rem;
`

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: "100%", flexDirection: "column" })}
`

const Filter = styled.div`
    display: flex;
    align-items: center;
    ${mobile({ marginBottom: "1.5rem" })}
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.p`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`

const FilterSizeOption = styled.option`

`

const AddContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({ width: "100%" })}
`

const Button = styled.button`
    width: 100%;
    margin: auto;
    padding: 0.625rem;
    font-size: 20px;
    color: white;
    background-color: black;
    border-radius: 1rem;
    border: 1px solid black;
    cursor: pointer;
    margin-top: 2rem;
    ${mobile({ marginTop: "0" })}

    &:hover {
        background-color: #161616;
        color: white;
    }
`

const Divider = styled.hr`
    margin: 3rem 0rem;
    border: 0;
    height: 1px;
    background: black;
`

const Product = () => {
    let {id} = useParams()
    const itemDetails = testProducts.find((item) => (String(item.id) === id)) || {};

    return (
        <AnimatedPage>
            <Container>
                <Navbar />
                <Announcement />
                <Wrapper>
                    <ImgContainer>
                        <Image
                            src={itemDetails.img}
                        />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{itemDetails.title}</Title>
                        <Price>{itemDetails.price}</Price>
                        <Description>{itemDetails.desc}</Description>
                        <Divider />
                        <FilterContainer>
                            <Filter>
                                <FilterTitle>Color: </FilterTitle>
                                <FilterColor color="black"/>
                                <FilterColor color="darkblue"/>
                                <FilterColor color="gray"/>
                                <FilterColor color="red"/>
                                <FilterColor color="yellow"/>
                                <FilterColor color="teal"/>
                            </Filter>
                            <Filter>
                                <FilterTitle>Size: </FilterTitle>
                                <FilterSize>
                                    <FilterSizeOption>XS</FilterSizeOption>
                                    <FilterSizeOption>S</FilterSizeOption>
                                    <FilterSizeOption>M</FilterSizeOption>
                                    <FilterSizeOption>L</FilterSizeOption>
                                    <FilterSizeOption>XL</FilterSizeOption>
                                </FilterSize>
                            </Filter>
                        </FilterContainer>
                        <AddContainer>
                            <Button>ADD TO CART</Button>
                        </AddContainer>
                    </InfoContainer>
                </Wrapper>
                <Newsletter />
                <Footer />
            </Container>
        </AnimatedPage>
    )
}

export default Product