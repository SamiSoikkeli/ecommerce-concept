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
    url("https://images.unsplash.com/photo-1609499097428-cdca906c211d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")
      center;
      background-size: cover;
      display: flex;
      align-items: center;
      justify-content: center;
`

const Wrapper = styled.div`
    width: 25%;
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
    flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
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

const Link = styled.a`
    margin: 5px 0px;
    font-size: 10px;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
    return (
        <AnimatedPage>
            <Navbar />
            <Container>
                <Wrapper>
                    <Title>SIGN IN</Title>
                    <Form>
                        <Input placeholder="username"/>
                        <Input placeholder="password"/>
                        <Button>LOGIN</Button>
                        <Link>FORGOT PASSWORD?</Link>
                        <Link>cREATE A NEW ACCOUNT</Link>
                    </Form>
                </Wrapper>
            </Container>
            <Footer />
        </AnimatedPage>
    )
}

export default Login