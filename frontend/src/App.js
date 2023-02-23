// import React from "react";
// import Login from "./pages/Login";
// import Home from "./pages/Home";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import Register from "./pages/Register";

// const App = () => {
//   const user = false;
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />}></Route>
//         {/* <Route path="/register" element={<Register />}></Route> */}
//         <Route
//           path="/login"
//           element={user ? <Navigate to="/" /> : <Login />}
//         ></Route>
//         <Route
//           path="/register"
//           element={user ? <Navigate to="/" /> : <Register />}
//         ></Route>
//       </Routes>
//     </Router>
//   );
// };

// export default App;

// testing productList design
import ProductList from "./pages/ProductList";

const App = () => {
  return <ProductList />;
};

export default App;
