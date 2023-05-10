import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import styled from 'styled-components'

const Title = styled.div`
  text-align: center;
  color: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  letter-spacing: 2px;
  line-height:2
`
const TitleHead = styled.h1`
  background-image: url(https://media.giphy.com/media/26BROrSHlmyzzHf3i/giphy.gif);
  background-size: cover;
  color: transparent;
  -moz-background-clip: text;
  -webkit-background-clip: text;
  text-transform: uppercase;
  font-size: 70px;
`
const Home = () => {

  return (
    <>
    <Navbar/>
    <Announcement/>
    <Slider/>
    <Categories/>
    <Title><TitleHead>
    TRENDING NOW
    </TitleHead> </Title>
    <Products/>
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default Home