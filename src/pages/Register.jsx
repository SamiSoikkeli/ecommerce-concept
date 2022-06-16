import React from 'react'
import styled from 'styled-components'
import AnimatedPage from '../components/animations/AnimatedPage';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import {mobile} from "../utils/responsive";

const Container = styled.div`
    padding: 3rem 0rem;
    width: 100% - 1rem;
    height: 70vh;
    margin: 0.5rem 0.5rem 0.5rem 0.5rem;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1481754100984-dbae571fe45b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")
      center;
      background-size: cover;
      display: flex;
      align-items: center;
      justify-content: center;
`

const Wrapper = styled.div`
    width: 40%;
    padding: 2rem;
    border-radius: 1rem;
    background-color: white;
    ${mobile({ width: "75%" })}
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`

const Button = styled.button`
    width: 100%;
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

const Register = () => {
    return (
        <AnimatedPage>
            <Navbar />
            <Container>
                <Wrapper>
                    <Title>CREATE AN ACCOUNT</Title>
                    <Form>
                        <Input placeholder="name"/>
                        <Input placeholder="last name"/>
                        <Input placeholder="username"/>
                        <Input placeholder="email"/>
                        <Input placeholder="password"/>
                        <Input placeholder="confirm password"/>
                        <Agreement>
                            By creating an account, I consent to the processing of my personal
                            data in accordance with the <b>PRIVACY POLICY</b>
                        </Agreement>
                        <Button>CREATE</Button>
                    </Form>
                </Wrapper>
            </Container>
            <Footer />
        </AnimatedPage>
    )
}

export default Register