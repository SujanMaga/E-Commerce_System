import React from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Pay from "./pages/Pay";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
// import Cart from "./pages/Cart";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  // console.log(user);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/register" element={<Register />}></Route> */}
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        ></Route>
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        ></Route>
        <Route path="/products/:category" element={<ProductList />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
        <Route path="/products" element={<ProductList />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/pay" element={<Pay />}></Route>
        <Route path="/success" element={<Success />}></Route>
      </Routes>
    </Router>
  );
};

export default App;

// // testing productList design
// import Product from "./pages/Product";
// import ProductList from "./pages/ProductList";

// const App = () => {
//   return <ProductList />;
//   // return <Product />;
// };

// export default App;
