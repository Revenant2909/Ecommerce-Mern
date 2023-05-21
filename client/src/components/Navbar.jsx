import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Container = styled.div`
    height : 60px;
    ${mobile({ height: "50px"})}
    
`
const Wrapper = styled.div`
    display: flex;
    padding: 10px 20px;
    align-items: center;
    ${mobile({ padding: "10px 0px"})}
`
const Left = styled.div`
    margin-left: 20px;
    display: flex;
    flex: 1;
    align-items: center;
`

const Center = styled.div`
    display: flex;
    justify-content: center;
    color: black;
    flex: 1;
    font-size: 36px;
    font-weight: 700;
    ${mobile({ fontSize: "24px"})}

`

const Right = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    ${mobile({ justifyContent: "center"})}

`
const Language = styled.span`
    ${mobile({ display: "none"})}
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    display: flex;
    border: 0.5px solid grey;
    height: 20px;
    font-size: 14px;
    align-items: center;
    padding: 5px;
    border-radius: 3px;
    margin-left: 5px;
    
`
const Input = styled.input`
    border: none;
    height: 100%;
    ${mobile({ width: "50px"})}
    &:focus { border: none;
        outline: none; }
`
const MenuItem = styled.div`
    margin-right: 25px;
    color: black;
    font-weight: 400;
    display: flex;
    font-size: 16px;
    cursor: pointer;
    ${mobile({ fontSize: "12px", marginLeft:"10px" })}
`
const Navbar = () => {
    const user = useSelector(state => state.user.currentUser);
    const quantity = useSelector(state=>state.cart.quantity);
    
    const handleLogout = () =>{
        localStorage.removeItem("persist:root");
        window.location.reload(false);
        console.log("Logged out");
    }

  return (
    <Container>
        <Wrapper>
        <Left>
             <Language>EN</Language> 
             <SearchContainer>
                <Input placeholder='Search for products,brands and more'/>
                <Search style={{color:"grey",fontSize:"18px"}}/>
             </SearchContainer>
        </Left>
        <Link to="/">
        <Center>LAF1AME. </Center>
        </Link>
        <Right> 
            <Link to="/wishlist">
            <MenuItem>WISHLIST</MenuItem>
            </Link>
            { !user ?
                <Link to="/register"> <MenuItem>REGISTER</MenuItem> </Link>
                : <MenuItem></MenuItem>

            }
            {
            !user ? <Link to="/login"> <MenuItem>SIGN IN</MenuItem> </Link> :  <MenuItem onClick={handleLogout}> LOGOUT </MenuItem> 
            }
            <Link to="/cart">
            <MenuItem>
            <Badge badgeContent={quantity}>
            <ShoppingCartOutlined />
            </Badge>
            </MenuItem>
            </Link>
             </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar