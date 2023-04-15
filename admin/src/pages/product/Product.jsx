import { Publish } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateProduct } from "../../redux/apiCalls";
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
  const dispatch = useDispatch();
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );

  const handleEdit = (id, product) => {
    updateProduct(id, product, dispatch);
  };
  // console.log(product);
  return (
    <Container>
      <ProductTitle>Product</ProductTitle>
      <ProductTop>
        <ProductInfoTop>
          <ProductImage src={product.img}></ProductImage>
          <ProductName>{product.title}</ProductName>
        </ProductInfoTop>
        <ProductInfoBottom>
          <ProductInfoItem>
            <ProductInfoKey>id:</ProductInfoKey>
            <ProductInfoValue>{product._id}</ProductInfoValue>
          </ProductInfoItem>
          <ProductInfoItem>
            <ProductInfoKey>sales:</ProductInfoKey>
            <ProductInfoValue>2323</ProductInfoValue>
          </ProductInfoItem>
          <ProductInfoItem>
            <ProductInfoKey>in stock:</ProductInfoKey>
            <ProductInfoValue>{product.inStock}</ProductInfoValue>
          </ProductInfoItem>
        </ProductInfoBottom>
      </ProductTop>

      <ProductBottom>
        <ProductForm>
          <ProductFormLeft>
            <Label>Product Name</Label>
            <Input type="text" placeholder={product.title} />
            <Label>Product Description</Label>
            <Input type="text" placeholder={product.desc} />
            <Label>Price</Label>
            <Input type="text" placeholder={product.price} />
            <Label>Product Categories</Label>
            <Input type="text" placeholder={product.categories} />
            <Label>Product Color</Label>
            <Input type="text" placeholder={product.color} />
            <Label>Product Size</Label>
            <Input type="text" placeholder={product.size} />
            <Label>In Stock</Label>
            <Select name="inStock" id="inStock">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </Select>
          </ProductFormLeft>
          <ProductFormRight>
            <ProductUpload>
              <ProductUploadImg src={product.img} alt="" />
              <Label htmlFor="file">
                <Publish />
              </Label>
              <Input type="file" id="file" style={{ display: "none" }} />
            </ProductUpload>
            <ProductButton
              onClick={() => {
                handleEdit(product._id, product);
              }}
            >
              Update
            </ProductButton>
          </ProductFormRight>
        </ProductForm>
      </ProductBottom>
    </Container>
  );
};

export default Product;
