import React from 'react'
import styled from 'styled-components'
import AnimatedElements from './animations/AnimatedElements';

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

const ButtonWhite = ({props}) => {
    return (
      <AnimatedElements>
        <Button>{props.ButtonText}</Button>
      </AnimatedElements>
    );
  };

  export default ButtonWhite