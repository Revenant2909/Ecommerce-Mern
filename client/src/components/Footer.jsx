import { Facebook, Instagram, Pinterest, Twitter,Phone,Room, MailOutline } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
    padding: 20px;
    flex: 1;
`;
const Logo = styled.h1`
    font-size: 40px;
`;

const Desc = styled.p`
    margin: 20px 0px;
    font-weight: 300;
`;

const SocialContainer = styled.div`
    margin-left: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SocialIcon = styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 500;
    margin-right: 20px;
    width: 40px;
    height: 40px;
    color: white;
    background-color: ${props=>props.color};
    border-radius: 50%;
    
`;
const Center = styled.div`
    flex: 1;
    padding: 20px;
    align-items: center;
    justify-content: center;
    ${mobile({ display: "none" })}
`;
const Title = styled.h3`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
`;
const List = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    flex-wrap: wrap;
   
`;
const ListItem = styled.li`
    margin: 5px 0px;
    width: 50%;
    cursor: pointer;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>LAF1AME.</Logo>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Architecto sequi expedita praesentium dolorem, magnam velit!
                Nostrum et vero nam nisi.
            </Desc>
            <SocialContainer>
                <SocialIcon color="#2b7de2">
                    <Facebook />
                </SocialIcon>
                <SocialIcon color="#d4405c">
                    <Instagram />
                </SocialIcon>
                <SocialIcon color="#0667de">
                    <Twitter />
                </SocialIcon>
                <SocialIcon color="#d5072d">
                    <Pinterest />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men's Fashion</ListItem>
                <ListItem>Women's Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Orders</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms & Conditions</ListItem>
                <ListItem>License</ListItem>
            </List>
            
        </Center>
        <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> Bangalore. Prestige Platina Technology Park Building 2, Block A Bangalore,
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +1 234 5642 782
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> contact@laflame.inc
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
    </Container>
  )
}

export default Footer