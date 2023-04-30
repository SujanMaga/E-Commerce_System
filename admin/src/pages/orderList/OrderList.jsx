import React, { useEffect } from "react";
import styled from "styled-components";
import { DataGrid } from "@material-ui/data-grid";
import { Delete } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrder, getOrders } from "../../redux/apiCalls";

const Container = styled.div`
  flex: 4;
  padding-left: 10px;
`;

const OrderListEditButton = styled.button`
  border: none;
  border-radius: 10px;
  background-color: gray;
  color: white;
  padding: 5px 10px;
  margin-right: 20px;
  cursor: pointer;
`;

const OrderList = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);
  // const [data, setData] = useState(OrderRows);

  useEffect(() => {
    getOrders(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    // setData(data.filter((item) => item.id !== id));
    deleteOrder(id, dispatch);
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
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/order/" + params.row._id}>
              <OrderListEditButton>Edit</OrderListEditButton>
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
        rows={orders}
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={14}
        disableSelectionOnClick
        // rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Container>
  );
};

export default OrderList;
