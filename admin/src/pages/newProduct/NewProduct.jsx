import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import Swal from "sweetalert2";
import app from "../../firebase";
import { addProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
const Container = styled.div`
  flex: 4;
  padding: 20px;
`;
const AddProductTitle = styled.h1``;
const AddProductForm = styled.form`
  margin-top: 10px;
`;
const AddProductItem = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Label = styled.label`
  color: gray;
  font-weight: 600;
  margin-bottom: 10px;
`;
const Input = styled.input`
  padding: 10px;
`;
const Select = styled.select`
  padding: 10px;
`;
const Option = styled.option``;
const AddProductButton = styled.button`
  margin-top: 10px;
  padding: 7px 10px;
  border: none;
  border-radius: 10px;
  background-color: darkblue;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const NewProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // handle state for input ,file and categories
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);
  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };
  const handleSize = (e) => {
    setSize(e.target.value.split(","));
  };
  const handleColor = (e) => {
    setColor(e.target.value.split(","));
  };
  // console.log(inputs);
  // console.log(cat);
  // console.log(size);
  // console.log(color);

  const handleClick = (e) => {
    e.preventDefault();
    // giving file a unique name
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => {
            console.log("File available at", downloadURL);
            const product = {
              ...inputs,
              img: downloadURL,
              categories: cat,
              size: size,
              color: color,
            };
            addProduct(product, dispatch)
              .then(() => {
                Swal.fire({
                  icon: "success",
                  title: "Product Added",
                  text: "Product has been added successfully!",
                });
                navigate("/products");
              })
              .catch((error) => {
                Swal.fire({
                  icon: "error",
                  title: "Add Product Failed",
                  text: "Failed to add the product.",
                });
                console.error(error);
              });
          })
          .catch((error) => {
            console.error(error);
          });
      }
    );
  };
  return (
    <Container>
      <AddProductTitle>New Product</AddProductTitle>
      <AddProductForm>
        <AddProductItem>
          <Label>Image</Label>
          <Input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          ></Input>
        </AddProductItem>
        <AddProductItem>
          <Label>Title</Label>
          <Input
            name="title"
            type="text"
            placeholder="t-shirt"
            onChange={handleChange}
          ></Input>
        </AddProductItem>
        <AddProductItem>
          <Label>Description</Label>
          <Input
            name="desc"
            type="text"
            placeholder="description"
            onChange={handleChange}
          ></Input>
        </AddProductItem>
        <AddProductItem>
          <Label>Price</Label>
          <Input
            name="price"
            type="text"
            placeholder="2300"
            onChange={handleChange}
          ></Input>
        </AddProductItem>
        <AddProductItem>
          <Label>Categories</Label>
          <Input
            type="text"
            placeholder="tshirt,jersey"
            onChange={handleCat}
          ></Input>
        </AddProductItem>
        <AddProductItem>
          <Label>Size</Label>
          <Input
            type="text"
            placeholder="XS,S,M,X,XL"
            onChange={handleSize}
          ></Input>
        </AddProductItem>
        <AddProductItem>
          <Label>Color</Label>
          <Input
            type="text"
            placeholder="red,blue"
            onChange={handleColor}
          ></Input>
        </AddProductItem>
        <AddProductItem>
          <Label>Stock</Label>
          <Select name="inStock" onChange={handleChange}>
            <Option value="true">Yes</Option>
            <Option value="false">No</Option>
          </Select>
        </AddProductItem>

        <AddProductButton onClick={handleClick}>Create</AddProductButton>
      </AddProductForm>
    </Container>
  );
};

export default NewProduct;
