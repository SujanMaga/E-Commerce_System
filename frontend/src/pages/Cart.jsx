import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
`;
const Wrapper = styled.div``;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer !important;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
  /* background-color: green; */
`;
const Summary = styled.div`
  flex: 1;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  /* background-color: red; */
`;
const Image = styled.img`
  width: 200px;
`;
const Detail = styled.div``;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div``;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  /* background-color: green; */
`;
const Cart = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Your Cart</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Cart(2)</TopText>
            <TopText>Your WishList</TopText>
          </TopTexts>
          <TopButton type="filled">Checkout Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://source.unsplash.com/random/300x300" />
                <Detail>
                  <ProductName>
                    <b>Product:</b>Whatever
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>2323232
                  </ProductId>
                  <ProductColor />

                  <ProductSize>
                    <b>Size:</b>14
                  </ProductSize>
                </Detail>
              </ProductDetail>
              <PriceDetail>price</PriceDetail>
            </Product>
          </Info>
          <Summary>Summary</Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;
