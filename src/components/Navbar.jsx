import { ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import {mobile, smallMobile} from "../utils/responsive"
import { NavLink } from "react-router-dom"

const Container = styled.div`
    height: 60px;
    z-index: 999;
    background-color: white;
    ${mobile({ height: "50px" })}
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;

    a {
        text-decoration: none;
        color: black;
    }
`

const Center = styled.div`
    flex: 1;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
`

const Logo = styled.h1`
    font-weight: 900;
    letter-spacing: -0.1rem;
    ${mobile({ fontSize: "1.5rem" })}
    ${smallMobile({ fontSize: "1rem" })}
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`

const MenuItem = styled.div`
    a {
        text-decoration: none;
        color: black;
        font-size: 0.875rem;
        cursor: pointer;
        margin-left: 3rem;
        ${mobile({ fontSize: "0.75rem", marginLeft: "10px" })}
        ${smallMobile({ fontSize: "0.563rem", marginLeft: "10px" })}

        &:hover {
            text-decoration: underline;
        }
    }
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <NavLink to="/">
                        <Logo>LOGO.</Logo>
                    </NavLink>
                </Left>
                <Center>
                    <MenuItem>
                        <NavLink to="/products">
                            WOMEN
                        </NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink to="/products">
                            MEN
                        </NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink to="/products">
                            COLLECTIONS
                        </NavLink>
                    </MenuItem>
                </Center>
                <Right>
                    <MenuItem>
                        <NavLink to="/register">
                            REGISTER
                        </NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink to="/login">
                            LOGIN
                        </NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink to="/cart">
                            <Badge badgeContent={4} color="primary">
                                <ShoppingCartOutlined />
                            </Badge>
                        </NavLink>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar