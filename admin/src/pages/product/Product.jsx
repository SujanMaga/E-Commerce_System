import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
  flex: 4;
  padding: 20px;
`;

const ProductTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ProductTitle = styled.h1``;
const ProductAddButton = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: rgb(17, 155, 220);
  border-radius: 5px;
  font-size: 16px;
  color: white;
  cursor: pointer;
`;

const Product = () => {
  return (
    <Container>
      <ProductTitleContainer>
        <ProductTitle>Product</ProductTitle>
        <Link to="/newproduct">
          <ProductAddButton>Create</ProductAddButton>
        </Link>
      </ProductTitleContainer>
    </Container>
  );
};

export default Product;
