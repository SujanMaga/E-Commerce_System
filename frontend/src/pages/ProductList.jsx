import React from "react";
import styled from "styled-components";
import Products from "../components/Products";
const Container = styled.div`
  margin: 20px;
`;
const Title = styled.h1``;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;
const FilterText = styled.span`
  margin: 20px;
  font-weight: 600;
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Title>Clothes</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>Green</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Black</Option>
            <Option>White</Option>
            <Option>Yellow</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XL</Option>
            <Option>L</Option>
            <Option>M</Option>
            <Option>S</Option>
            <Option>XS</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option disabled selected>
              Summer
            </Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
    </Container>
  );
};

export default ProductList;
