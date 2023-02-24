import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight: 800;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  display: flex;
  margin: 40px 0px;
  justify-content: space-between;
  width: 50%;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
`;
const FilterSize = styled.select`
  margin: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #b7dce7;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 5px;
`;
const Button = styled.div`
  padding: 15px;
  border: 3px solid #b7dce7;
`;
const Product = () => {
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1905&q=80" />
        </ImgContainer>
        <InfoContainer>
          <Title>Woolen Clothes</Title>
          <Desc>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem ut
            culpa, necessitatibus placeat molestias aliquid amet cupiditate
            eaque voluptate quos saepe perferendis praesentium excepturi iure
            accusantium iusto quae et cum quibusdam sunt, asperiores vel?
            Commodi vero assumenda saepe tempore ullam repellat, distinctio,
            quis laborum consectetur amet iure illum voluptatibus dolor eum?
            Itaque laboriosam perspiciatis consectetur expedita asperiores harum
            eius mollitia! Ullam labore omnis unde facere aspernatur deserunt
            delectus. Perspiciatis, itaque atque? Quaerat nostrum molestiae
            harum omnis eos ipsam magni mollitia soluta necessitatibus eaque vel
            commodi, ducimus doloribus maiores doloremque voluptatibus vitae
            molestias autem sint veritatis atque recusandae provident, impedit
            dolorum!
          </Desc>
          <Price>$100</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="white" />
              <FilterColor color="green" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default Product;
