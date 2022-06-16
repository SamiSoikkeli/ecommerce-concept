import React from 'react'
import styled from 'styled-components'
import AnimatedSubTitle from './animations/AnimatedSubTitle';
import AnimatedTitle from './animations/AnimatedTitle';

const Container = styled.div`
    width: 100% - 1rem;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    margin: 0rem 0.5rem 0rem 0.5rem;
    background: url("https://images.unsplash.com/photo-1550446126-8a7ecdc0b400?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
    background-repeat: no-repeat;
    border-radius: 1rem;
    background-size: cover;

    video {
        object-fit: cover;
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
    }
`

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    color: white;
    transition: all 1.5s ease;
`

const Slider = () => {
    return (
            <Container>
                <Wrapper>
                    <AnimatedTitle text="Be exclusive, Be Devine, Be yourself."/>
                    <AnimatedSubTitle text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                </Wrapper>
            </Container>
    )
}

export default Slider