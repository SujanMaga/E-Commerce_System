import React, { useEffect } from "react";
import styled from "styled-components";
import { DataGrid } from "@material-ui/data-grid";
import { Delete } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrder, getOrders, updateOrder } from "../../redux/apiCalls";
import { Select, MenuItem } from "@material-ui/core";
import Swal from "sweetalert2";

const Container = styled.div`
  flex: 4;
  padding-left: 10px;
`;

const ProductListImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;
const ProductListItem = styled.div`
  display: flex;
  align-items: center;
`;
const OrderList = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);

  useEffect(() => {
    getOrders(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteOrder(id, dispatch);
  };

  const handleEdit = (id) => {
    Swal.fire({
      title: "Update Order Status",
      text: "Select the new status for this order:",
      input: "select",
      inputOptions: {
        pending: "Pending",
        delivered: "Delivered",
      },
      inputPlaceholder: "Select a status",
      showCancelButton: true,
      confirmButtonText: "Update",
      showLoaderOnConfirm: true,
      preConfirm: (selectedStatus) => {
        return updateOrder(id, { status: selectedStatus }, dispatch);
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const selectedStatus = result.value;
        const message =
          selectedStatus === "delivered"
            ? "Order delivered successfully."
            : "Order status updated successfully.";
        Swal.fire({
          title: "Success",
          text: message,
          icon: "success",
        }).then(() => {
          getOrders(dispatch);
        });
      }
    });
  };

  const columns = [
    { field: "_id", headerName: "Order_ID", width: 230 },
    {
      field: "userId",
      headerName: "User_ID",
      width: 230,
    },
    {
      field: "products",
      headerName: "Product",
      width: 230,
      renderCell: (params) => {
        return (
          <div>
            {params.row.products.map((product, index) => (
              <ProductListItem key={index}>
                <ProductListImage src={product.img} alt="product" />
                {product.title}
              </ProductListItem>
            ))}
          </div>
        );
      },
    },
    {
      field: "address.city",
      headerName: "Address",
      width: 250,
      valueGetter: (params) => params.row.address.city || "",
    },
    {
      field: "amount",
      headerName: "Amount",
      width: 160,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      editable: true,
      cellEditor: "select",
      cellEditorProps: {
        options: ["pending", "delivered"],
      },
      renderCell: (params) => {
        return (
          <Select
            value={params.value}
            onChange={(e) => {
              handleEdit(params.row._id, { status: e.target.value });
            }}
          >
            <MenuItem value={"pending"}>Pending</MenuItem>
            <MenuItem value={"delivered"}>Delivered</MenuItem>
          </Select>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Delete
              style={{
                color: "red",
                cursor: "pointer",
              }}
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
        rows={orders}
        columns={columns}
        getRowId={(row) => (row ? row._id : "")}
        pageSize={8}
        disableSelectionOnClick
      />
    </Container>
  );
};

export default OrderList;
