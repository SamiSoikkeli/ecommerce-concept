import React from 'react'
import styled from 'styled-components'
import {mobile} from "../utils/responsive";
import AnimatedElements from './animations/AnimatedElements';

const Container = styled.div`
    width: 100%;
    margin: 10rem 0rem 15rem 0rem;
    display: flex;
    position: relative;
    overflow: hidden;
    text-align: center;
    justify-content: center;
`

const Wrapper = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    ${mobile({ width: "80%" })}
`

const Title = styled.h1`
    font-size: 70px;
`

const Description = styled.p`
    margin: 50px 0px;
    font-size: 18px;
    font-weight: 400;
`

const Button = styled.button`
    width: 40%;
    margin: auto;
    padding: 10px;
    font-size: 20px;
    color: black;
    background-color: transparent;
    border-radius: 1rem;
    border: 1px solid black;
    cursor: pointer;

    &:hover {
        background-color: black;
        color: white;
    }
`

const About = () => {
    return (
        <Container>
            <Wrapper>
                <AnimatedElements>
                    <Title>Lorem ipsum dolor sit amet</Title>
                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl magna, blandit non augue at, consequat tincidunt libero. Curabitur eget dignissim purus. In congue eget neque sed feugiat. Nam cursus ex rhoncus aliquam pretium. Donec placerat felis turpis, fringilla hendrerit risus feugiat mattis. Pellentesque finibus magna lorem, vitae elementum nibh convallis eu. In sollicitudin lacus eget metus cursus, non molestie nunc blandit. Nam dapibus ultricies leo, in posuere purus facilisis vel. Integer augue elit, ultricies in elementum in, tincidunt eget erat. Nullam cursus sit amet nulla at tempus. Donec tristique accumsan gravida.
                    </Description>
                    <Button>SHOP NOW</Button>
                </AnimatedElements>
            </Wrapper>
        </Container>
    )
}

export default About