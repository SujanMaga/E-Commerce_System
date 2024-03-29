import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";
import OrderList from "./pages/orderList/OrderList";
// import { useSelector } from "react-redux";
function App() {
  const admin = useSelector((state) => state.user.currentUser);

  // console.log(admin);

  // const admin = JSON.parse(
  //   JSON.parse(localStorage.getItem("persist:root")).user
  // ).currentUser.isAdmin;
  // console.log(admin);
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route
            path="/login"
            element={admin ? <Navigate to="/" /> : <Login />}
          ></Route>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newProduct" element={<NewProduct />} />
          <Route path="/orders" element={<OrderList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
