import React, { useEffect } from "react";
import styled from "styled-components";
import { DataGrid } from "@material-ui/data-grid";
import { Delete } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrder, getOrders, updateOrder } from "../../redux/apiCalls";
import { Select, MenuItem } from "@material-ui/core";
const Container = styled.div`
  flex: 4;
  padding-left: 10px;
`;

const OrderList = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);

  useEffect(() => {
    getOrders(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    // setData(data.filter((item) => item.id !== id));
    deleteOrder(id, dispatch);
  };
  const handleEdit = (id, updatedOrder) => {
    updateOrder(id, updatedOrder, dispatch).then(() => {
      getOrders(dispatch);
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
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
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
