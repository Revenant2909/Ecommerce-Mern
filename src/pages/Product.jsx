import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Add, Remove } from '@mui/icons-material';
import { mobile } from "../responsive";
import { useLocation } from 'react-router-dom';
import { publicRequest } from '../requestMethods';
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';


const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const ImgContainer = styled.div`
    flex: 1;
`;
const Image = styled.img`
    width: 100%;
    height: 70vh;
    object-fit: contain;
    ${mobile({ height: "40vh" })}
`;
const InfoContainer = styled.div`
     flex: 1;
     padding: 0px 50px;
     ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
    font-weight: 600;
`;
const Desc = styled.p`
    margin: 20px 0px;
`;
const Price = styled.span`
    font-weight: 300;
    font-size: 40px;
`;
const FilterContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin: 30px 0px;
    ${mobile({ width: "100%" })}
`;
const Filter = styled.div`
    display: flex;
    align-items: center;
`;
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 500;
    margin-right: 10px;
`;
const FilterColor = styled.div`
    cursor: pointer;
    width: 20px;
    height: 20px;
    border: solid aliceblue;
    border-radius: 50%;
    margin-right: 5px;
    background-color: ${props => props.color};
`;
const FilterSize = styled.select`
    cursor: pointer;
    margin-left: 10px;
    padding: 5px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: "100%" })}
`;
const AmountContainer = styled.div`
        display: flex;
        align-items: center;
        font-weight: 700;
        
`;
const Amount = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border: 2px solid teal;
    border-radius: 10px;
    margin: 0px 5px;
`;

const Button = styled.button`
    border: 2px solid teal;
    background-color: white;
    border-radius: 5px;
    padding: 15px;
    font-weight: 700;
    color: teal;
    cursor: pointer;
    &:hover{
        background-color: aliceblue;
    }
`;
const ShippingDetails = styled.div`
    margin-top: 50px;
`;
const ShippingTitle = styled.h3`
    font-weight: 600;
`;
const ShippingDesc = styled.span`
     font-weight: 300;
`;


const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch();


    useEffect(() => {
        const getProduct = async () => {

            try {
                const res = await publicRequest.get("/products/find/" + id)
                setProduct(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getProduct();
    }, [id]);

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
        }
        else {
            setQuantity(quantity + 1);
        }
    }

    const handleClick = () => {

        dispatch(addProduct({ ...product, quantity, color, size }));
    }
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src={product.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>
                        {product.desc}
                    </Desc>
                    <Price>₹ {product.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            {product.color?.map((c) => (
                                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
                            ))}
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize onChange={(e) => setSize(e.target.value)}>
                                {product.size?.map((s) => (
                                    <FilterSizeOption key={s} >{s}</FilterSizeOption>
                                ))}
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={() => handleQuantity("dec")} />
                            <Amount>{quantity}</Amount>
                            <Add onClick={() => handleQuantity("inc")} />
                        </AmountContainer>
                        <Button onClick={handleClick}>ADD TO CART</Button>
                    </AddContainer>
                        <ShippingDetails>
                            <ShippingTitle>Shipping and Returns</ShippingTitle>
                            <ShippingDesc>
                        Free standard delivery on all orders and free return for all 
                        qualifying orders within <b>14 days of your order delivery date.</b>
                         Visit our Return Policy for more information.<br/><br/><br/>
                        For any queries, please contact Customer Service at 080-35353535
                         or via customercareindia@laf1ame.com .
                            </ShippingDesc>
                        </ShippingDetails>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product