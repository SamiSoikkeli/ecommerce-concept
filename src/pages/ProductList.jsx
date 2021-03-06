import React from 'react'
import styled from 'styled-components'
import AnimatedPage from '../components/animations/AnimatedPage'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import {mobile} from "../utils/responsive";

const Container = styled.div`

`

const FilterContainer = styled.div`
    margin-top: 5rem;
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    margin: 20px;
    ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0px" })}
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0px" })}
`

const Option = styled.option`

`

const ProductList = () => {
    return (
        <AnimatedPage>
            <Container>
                <Navbar />
                <Announcement />
                <FilterContainer>
                    <Filter>
                        <FilterText>Filter Products:</FilterText>
                        <Select defaultValue="Color">
                            <Option disabled>Color</Option>
                            <Option>White</Option>
                            <Option>Black</Option>
                            <Option>Red</Option>
                            <Option>Blue</Option>
                            <Option>Yellow</Option>
                            <Option>Green</Option>
                        </Select>
                        <Select defaultValue="Size">
                            <Option disabled>
                            Size
                            </Option>
                            <Option>XS</Option>
                            <Option>S</Option>
                            <Option>M</Option>
                            <Option>L</Option>
                            <Option>XL</Option>
                        </Select>
                    </Filter>
                    <Filter>
                        <FilterText>Sort Products:</FilterText>
                        <Select defaultValue="Newest">
                            <Option>Newest</Option>
                            <Option>Price (asc)</Option>
                            <Option>Price (desc)</Option>
                        </Select>
                    </Filter>
                </FilterContainer>
                <Products />
                <Newsletter />
                <Footer />
            </Container>
        </AnimatedPage>
    )
}

export default ProductList