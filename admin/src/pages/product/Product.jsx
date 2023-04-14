import { Publish } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 4;
  padding: 20px;
`;

const ProductTitle = styled.h1``;
const ProductTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductInfoTop = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const ProductImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const ProductName = styled.span`
  margin-left: 10px;
  font-weight: 600;
  font-size: 25px;
`;

const ProductInfoBottom = styled.div``;
const ProductInfoItem = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;
const ProductInfoKey = styled.span``;
const ProductInfoValue = styled.span`
  font-weight: 300;
`;
const ProductBottom = styled.div`
  padding: 20px;
  margin: 20px 0px;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const ProductForm = styled.form`
  display: flex;
  justify-content: space-between;
`;

const ProductFormLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 10px;
  color: gray;
`;

const Input = styled.input`
  margin-bottom: 10px;
  border: none;
  padding: 5px;
  border-bottom: 1px solid gray;
`;

const Select = styled.select`
  margin-bottom: 10px;
`;

const ProductUploadImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`;

const ProductFormRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductUpload = styled.div`
  display: flex;
  align-items: center;
`;

const ProductButton = styled.button`
  border: none;
  padding: 5px;
  border-radius: 5px;
  background-color: darkblue;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;
const Product = () => {
  return (
    <Container>
      <ProductTitle>Product</ProductTitle>
      <ProductTop>
        <ProductInfoTop>
          <ProductImage src="https://firebasestorage.googleapis.com/v0/b/yukti-e8bd7.appspot.com/o/1680433510014pic10.png?alt=media&token=d5eab40d-a521-4b10-b59d-49857198a87f"></ProductImage>
          <ProductName>Black Sweatshirt</ProductName>
        </ProductInfoTop>
        <ProductInfoBottom>
          <ProductInfoItem>
            <ProductInfoKey>id:</ProductInfoKey>
            <ProductInfoValue>38972932</ProductInfoValue>
          </ProductInfoItem>
          <ProductInfoItem>
            <ProductInfoKey>sales:</ProductInfoKey>
            <ProductInfoValue>2323</ProductInfoValue>
          </ProductInfoItem>
          <ProductInfoItem>
            <ProductInfoKey>active:</ProductInfoKey>
            <ProductInfoValue>true</ProductInfoValue>
          </ProductInfoItem>
          <ProductInfoItem>
            <ProductInfoKey>in stock:</ProductInfoKey>
            <ProductInfoValue>yes</ProductInfoValue>
          </ProductInfoItem>
        </ProductInfoBottom>
      </ProductTop>

      <ProductBottom>
        <ProductForm>
          <ProductFormLeft>
            <Label>Product Name</Label>
            <Input type="text" placeholder="black sweatshirt" />
            <Label>Product Description</Label>
            <Input type="text" placeholder="Best sweatshirt in town" />
            <Label>Price</Label>
            <Input type="text" placeholder="2000" />
            <Label>Product Categories</Label>
            <Input type="text" placeholder="men" />
            <Label>Product Color</Label>
            <Input type="text" placeholder="red" />
            <Label>Product Size</Label>
            <Input type="text" placeholder="S" />
            <Label>In Stock</Label>
            <Select name="inStock" id="inStock">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </Select>
          </ProductFormLeft>
          <ProductFormRight>
            <ProductUpload>
              <ProductUploadImg
                src="https://firebasestorage.googleapis.com/v0/b/yukti-e8bd7.appspot.com/o/1680433510014pic10.png?alt=media&token=d5eab40d-a521-4b10-b59d-49857198a87f"
                alt=""
              />
              <Label htmlFor="file">
                <Publish />
              </Label>
              <Input type="file" id="file" style={{ display: "none" }} />
            </ProductUpload>
            <ProductButton>Update</ProductButton>
          </ProductFormRight>
        </ProductForm>
      </ProductBottom>
    </Container>
  );
};

export default Product;
