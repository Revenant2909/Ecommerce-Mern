import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { sliderItems } from '../data'
import {mobile} from "../responsive"
import { publicRequest } from '../requestMethods'

const Container = styled.div`
    ${mobile({ display: "none"})}
    width: 100%;
    height: 90vh;
    display: flex;
    position: relative;
    overflow: hidden;
    margin-bottom: 30px;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: aliceblue;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left:  ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 99;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props=>props.slideIndex*-100}vw);

`
const Slide = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    background-color: ${(props)=> props.bg};
`
const ImgContainer = styled.div`
    height: 100%;
    flex: 1.75;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: 99;
`
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
  /* margin: 10px 0; */
`
const Description = styled.p`
     margin: 50px 0px;
     font-weight: 400;
     letter-spacing: 3px;

`
const Button = styled.button`
    border: none;
    background-color: teal;
    border-radius: 2px;
    color: white;
    font-weight: 500;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
`
const Slider = () => {
    const [slideIndex,setSlideIndex] = useState(0);
    const[sliderData,SetSliderData] = useState([{}]);

    useEffect(()=>{
        const getSliders = async () =>{
            try {
                const res = await publicRequest.get(`/sliders`);
                console.log(res);
                // SetSliderData(res);
            } catch (err) {
                console.log(err);
            }
        };
        getSliders();
    },[]);
    

    const handleClick = (direction) => {
        if(direction==="left"){
            setSlideIndex(slideIndex>0 ? slideIndex-1 : 2)
        }
        else{
            setSlideIndex(slideIndex<2 ? slideIndex+1 : 0)
        }
    };

    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}><ArrowLeftOutlined /></Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item)=>(
                    <Slide bg= {item.bg} key={item.id}>
                <ImgContainer>
                    <Image src={item.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title><TitleHead>
                        {item.title}
                        </TitleHead>
                        </Title>
                    <Description>{item.desc}</Description>
                    <Button> Shop Now</Button>
                </InfoContainer>
                </Slide>
                ))}
                
            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick("right")}><ArrowRightOutlined /></Arrow>
        </Container>
    )
}

export default Slider