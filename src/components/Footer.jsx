import React from 'react'
import styled from "styled-components"
import {mobile} from "../utils/responsive";

const Container = styled.div`
    padding: 3rem 0rem;
    width: 100% - 1rem;
    margin: 0.5rem 0.5rem 0.5rem 0.5rem;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    display: flex;
    background: black;
    color: white;
    ${mobile({ flexDirection: "column" })}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1`
    font-weight: 900;
    letter-spacing: -0.1rem;
    ${mobile({ fontSize: "24px" })}
`

const Description = styled.div`
    margin: 20px 0px;
`

const Center = styled.div`
    display: flex;
    flex: 1;
    padding: 20px;
`

const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 100%;
    margin-bottom: 10px;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`

const Right = styled.div`
    display: flex;
    flex: 1;
    padding: 20px;
`

const ContactItem = styled.div`
    margin-bottom: 0.25rem;
    display: flex;
    align-items: center;
`

const Footer = () => {
    return (
            <Container>

                    <Left>
                        <Logo>LOGO.</Logo>
                        <Description>
                            <ContactItem>622 Dixie Path, South Tobinchester 8454</ContactItem>
                            <ContactItem>+1 234 56 78</ContactItem>
                            <ContactItem>contact@example.dev</ContactItem>
                        </Description>
                    </Left>
                    <Center>
                        <ListWrapper>
                            <Title>Shop</Title>
                            <List>
                                <ListItem>Man Fashion</ListItem>
                                <ListItem>Woman Fashion</ListItem>
                                <ListItem>Accessories</ListItem>
                            </List>
                        </ListWrapper>
                        <ListWrapper>
                            <Title>Useful Links</Title>
                            <List>
                                <ListItem>Cart</ListItem>
                                <ListItem>My Account</ListItem>
                                <ListItem>Wishlist</ListItem>

                            </List>
                        </ListWrapper>
                    </Center>
                    <Right>
                        <ListWrapper>
                            <Title>Legal</Title>
                            <List>
                                <ListItem>Terms</ListItem>
                                <ListItem>Order Tracking</ListItem>
                                <ListItem>Privacy Policy</ListItem>
                            </List>
                        </ListWrapper>
                        <ListWrapper>
                            <Title>Socials</Title>
                            <List>
                                <ListItem>Instagram</ListItem>
                                <ListItem>Facebook</ListItem>
                                <ListItem>Tiktok</ListItem>
                            </List>
                        </ListWrapper>
                    </Right>
            </Container>
    )
}

export default Footer