import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: #686868;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
`

const Announcement = () => {
  return (
    <Container>
        Super Deal! Free Shipping on Orders Over $50
    </Container>
  )
}

export default Announcement