import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Navbar from "../components/Navbar";
// import { getOrderById } from "../redux/apiCalls";

// Styled components
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background-color: #b7dce7;
`;

const TableHeaderCell = styled.th`
  padding: 12px;
  text-align: left;
`;

const TableBody = styled.tbody``;
const Header = styled.h1`
  margin: 20px;
`;

const TableRow = styled.tr``;

const TableCell = styled.td`
  padding: 12px;
  border-bottom: 1px solid #b7dce7;
`;

const Order = () => {
  // getting order
  // const dispatch = useDispatch();
  // const userId = useSelector((state) => state.user.currentUser?._id);
  // getOrderById(dispatch, userId);
  const orders = useSelector((state) => state.order.currentOrder);
  // console.log(orders);

  return (
    <>
      <Navbar></Navbar>
      <Header>Order Detail</Header>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Order ID</TableHeaderCell>
            <TableHeaderCell>User ID</TableHeaderCell>
            <TableHeaderCell>Amount</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Created At</TableHeaderCell>
            <TableHeaderCell>Updated At</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order._id}>
              <TableCell>{order._id}</TableCell>
              <TableCell>{order.userId}</TableCell>
              <TableCell>{order.amount}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>{order.createdAt}</TableCell>
              <TableCell>{order.updatedAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Order;
