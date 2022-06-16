import React from 'react'
import styled from 'styled-components'
import {mobile} from "../utils/responsive";

const Container = styled.div`
    width: 100% - 1rem;
    margin: 0rem 0.5rem 0rem 0.5rem;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    height: 60vh;
    background-color: #686868;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
`

const Wrapper = styled.div`
    width: 50%;
    text-align: center;
    align-items: center;
    justify-content: center;
`

const Title = styled.h1`
    font-size: 4.375rem;
    margin-bottom: 20px;
    ${mobile({ fontSize: "2.5rem" })}
`

const Description = styled.div`
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 2rem;
    ${mobile({ textAlign: "center", fontSize: "1rem" })}
`

const InputContainer = styled.div`
    margin: auto;
    width: 100%;
    height: 40px;
    padding: 1rem 0.5rem;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 2rem;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({ width: "100%", flexDirection: "column", padding: "0rem 0.5rem" })}
`

const Input = styled.input`
    border: none;
    background: transparent;
    flex: 8;
    padding-left: 20px;
    color: white;
    ${mobile({ paddingBottom: "3rem" })}

    &:focus {
        outline: none;
    }

    ::placeholder {
        color: white;
    }
`

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: white;
    color: black;
    border-radius: 2rem;
    cursor: pointer;
    ${mobile({ padding: "1rem" })}

    &:hover {
        background-color: black;
        color: white;
    }
`

const Newsletter = () => {
    return (
            <Container>
                    <Wrapper>
                        <Title>Subscribe to our Newsletter</Title>
                        <Description>Get timely updates from your favorite products.</Description>
                        <InputContainer>
                            <Input placeholder="Your email..."/>
                            <Button>
                                SUBSCRIBE
                            </Button>
                        </InputContainer>
                    </Wrapper>
            </Container>
    )
}

export default Newsletter