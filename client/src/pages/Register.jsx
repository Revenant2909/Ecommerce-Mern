import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
      rgba(255,255,255,0),
      rgba(255,255,255,0.5)
    ), url("https://i.ibb.co/t8fVH1s/seductive-blonde-woman-pink-jacket-posing.jpg" )center;
    background-size: cover;
    object-fit: contain;
    display: flex;
    align-items: center;
    justify-content: center;
    color: aliceblue;
`;
const Wrapper = styled.div`
    padding: 21px;
    width: 40%;
    display: flex;
    background-color: transparent;background: linear-gradient(
      rgba(0,0,0,0.4),
      rgba(0,0,0,0.7)
    );

    flex-direction: column;`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    `;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    font-size: 20px;
    padding: 15px 20px;
    background-color: #555;
    color: aliceblue;
    font-weight: 300;
`;

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE ACCOUNT</Title>
            <Form>
                <Input placeholder="first name"/>
                <Input placeholder="last name"/>
                <Input placeholder="username"/>
                <Input placeholder="email"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm password"/>
                <Agreement>
                    By creating an account, I consent to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY</b>.
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register