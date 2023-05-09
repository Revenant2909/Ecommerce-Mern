import styled from "styled-components"

const Container = styled.div`
    display: flex;
    height: 30px;
    background-color: teal;
    color: white;
    align-items: center;
    font-size: 14px;
    justify-content: center;
    font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>Extra 10% off on orders above ₹1999.</Container>
  )
}

export default Announcement