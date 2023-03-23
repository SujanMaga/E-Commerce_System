import React, { useEffect } from "react";
import styled from "styled-components";
import { DataGrid } from "@material-ui/data-grid";
import { Delete } from "@material-ui/icons";
// import { productRows } from "../../testing";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../../redux/apiCalls";

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
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  // const [data, setData] = useState(productRows);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    // setData(data.filter((item) => item.id !== id));
    deleteProduct(id, dispatch);
  };
  const columns = [
    { field: "_id", headerName: "ID", width: 230 },
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
            {params.row.title}
          </ProductListItem>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 200 },

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
            <Link to={"/product/" + params.row._id}>
              <ProductListEditButton>Edit</ProductListEditButton>
            </Link>

            <Delete
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => {
                handleDelete(params.row._id);
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
        rows={products}
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={5}
        disableSelectionOnClick
        // rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Container>
  );
};

export default ProductList;
