import React from 'react'
import styled from 'styled-components'
import AnimatedElements from './animations/AnimatedElements';

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

const ButtonBlack = (props) => {
    return (
      <AnimatedElements>
        <Button>{props.ButtonText}</Button>
      </AnimatedElements>

    )
}

export default ButtonBlack