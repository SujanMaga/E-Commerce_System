import React from "react";
import { useSelector } from "react-redux";

const Order = () => {
  // getting order
  const orders = useSelector((state) => state.order.currentOrder);
  console.log(orders);

  return (
    <div>
      {orders.map((order) => (
        <div key={order._id}>
          <p>Order ID: {order._id}</p>
          <p>User ID: {order.userId}</p>
          <p>Amount: {order.amount}</p>
          <p>Status: {order.status}</p>
          <p>Created At: {order.createdAt}</p>
          <p>Updated At: {order.updatedAt}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Order;
