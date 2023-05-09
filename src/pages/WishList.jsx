import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';
import Product from '../components/Product';

const Container = styled.div``;
const Title = styled.h2`
   font-size: 30px;
   font-weight: 500;
   margin-left: 50px;
   margin-top: 50px;
`;

const WishList = () => {
    
    const wishlist = useSelector(state=>state.wishList.wishlist);
    
    console.log(wishlist);
  return (
    
    <Container>
    <Navbar/>
    <Title>YOUR WISHLIST</Title>
    <Newsletter/>
    <Footer/>
    </Container>
  )
}

export default WishList