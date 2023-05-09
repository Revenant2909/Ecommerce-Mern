import { Favorite, FavoriteBorder, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { addWishList } from '../redux/wishListRedux';
import { useDispatch } from 'react-redux';

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgb(0, 0, 0,0.2);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    z-index: 3;
    transition: all 0.50s ease;
    cursor: pointer;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    background-color: aliceblue;
    position: relative;
    max-width: 400px;

    &:hover ${Info} {
        opacity: 1;
    }
`;
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;

`
const Image = styled.img`
    object-fit: contain;
    width: 100%;
    max-width: 400px;
    height: 100%;
    z-index: 2;
`

const Icon = styled.div`
    display: flex;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    margin: 10px;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    &:hover {
        background-color: aliceblue;
        transform: scale(1.3);
    }
`;

const Product = ({item}) => {
    const dispatch = useDispatch();

    const handleWish = () =>{
        dispatch(addWishList( item ));
    }

  return (
    <Container>
        <Circle/>
        <Image src={item.img} />
        <Info>
            <Link to="/cart">
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            </Link>
            <Link to={`/product/${item._id}` } style={{color: "blue"}}>
            <Icon>
                <SearchOutlined style={{color: "green"}}/>
            </Icon>
            </Link>    
            <Icon>
                <Favorite onClick={handleWish} style={{color: "red"}}/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product