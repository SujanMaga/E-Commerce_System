import axios from "axios";
import React, { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
const PublicKey =
  "pk_test_51N1Bo5An34WkQpYJGn74htIwaAOKPp2zSobKFwshyG6swnpgC4pxmGaaXwBYsptaJPskNXKJ6SgcAfGSTYsHYb8z00o47lmwC1";
const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/v1/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 1000,
          }
        );
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    // if there is stripe token
    stripeToken && makeRequest();
  }, [stripeToken]);

  const onToken = (token) => {
    setStripeToken(token);
  };

  return (
    <StripeCheckout
      name="Yukti Shop"
      image="https://firebasestorage.googleapis.com/v0/b/yukti-e8bd7.appspot.com/o/2079353.jpg?alt=media&token=490a5b70-3ec3-4625-8260-6e3d1a14b727"
      billingAddress
      shippingAddress
      description="Your Total is $10"
      amount={1000}
      token={onToken}
      stripeKey={PublicKey}
    >
      <button
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Pay Now
      </button>
    </StripeCheckout>
  );
};

export default Pay;
