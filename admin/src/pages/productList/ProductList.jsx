import React, { useState } from "react";
import styled from "styled-components";
import { DataGrid } from "@material-ui/data-grid";
import { Delete } from "@material-ui/icons";
import { productRows } from "../../testing";
import { Link } from "react-router-dom";
const Container = styled.div`
  flex: 4;
`;

const ProductListItem = styled.div`
  display: flex;
  align-items: center;
`;
const ProductListImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;
const ProductListEditButton = styled.button`
  border: none;
  border-radius: 10px;
  background-color: gray;
  color: white;
  padding: 5px 10px;
  margin-right: 20px;
  cursor: pointer;
`;

const ProductList = () => {
  const [data, setData] = useState(productRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <ProductListItem>
            <ProductListImage
              src={params.row.img}
              alt="product"
            ></ProductListImage>
            {params.row.name}
          </ProductListItem>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <ProductListEditButton>Edit</ProductListEditButton>
            </Link>

            <Delete
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => {
                handleDelete(params.row.id);
              }}
            />
          </>
        );
      },
    },
  ];

  return (
    <Container>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        disableSelectionOnClick
        // rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Container>
  );
};

export default ProductList;
