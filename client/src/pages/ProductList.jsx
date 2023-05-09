import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Products from '../components/Products'
import { mobile } from "../responsive";
import { useLocation } from 'react-router-dom'

const Container = styled.div``;
const Title = styled.h1`
    margin: 20px;
`;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div`
    margin: 20px;
    ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;
const FilterText = styled.span`
   font-size: 20px;
   font-weight: 600;
   margin-right: 10px;
   ${mobile({ marginRight: "0px" })}
`;
const Select = styled.select`
    color: teal;
    padding: 10px;
    margin: 0px 5px;
    border: 0.5px solid teal;
    border-radius: 5px;
    ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option`
    color: teal;
    font-size: 14px;
    padding: 10px;
`;


const ProductList = () => { 
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    // console.log(location);
    const [filters,setFilters]  = useState({});
    const [sort,setSort] = useState("newest");
    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
        [e.target.name] : value,
        });
    };
    // console.log(filters);
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>{cat}</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select name="color" onChange={handleFilters}>
                    <Option disabled >Color</Option>
                    <Option value="white" >White</Option>
                    <Option value="black">Black</Option>
                    <Option value="red">Red</Option>
                    <Option value="green">Green</Option>
                    <Option value="blue">Blue</Option>
                    <Option value="yellow">Yellow</Option>
                </Select>
                <Select name="size" onChange={handleFilters}>
                    <Option disabled >Size</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select onChange={e=>setSort(e.target.value)}>
                    <Option value="newest" >Newest</Option>
                    <Option value="asc">Price Low to High</Option>
                    <Option value="desc">Price High to Low (desc)</Option>
                    
                </Select>
                </Filter>
        </FilterContainer>
        <Products cat={cat} filters = {filters} sort={sort}/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList