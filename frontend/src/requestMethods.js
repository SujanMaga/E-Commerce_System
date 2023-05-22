// import axios from "axios";
// const BASE_URL = "http://localhost:5000/api/v1/";
// const TOKEN =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmNkY2JhMDkxYWZmNGRmYjgwYjRkNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NDA0OTczMywiZXhwIjoxNjg0MjIyNTMzfQ.cVdKQ10iDwj9meMgSLBYaKAgoAQ84MqBwsF4khNLY0o";
// // console.log(
// //   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
// //     .accessToken
// // );
// export const publicRequest = axios.create({
//   baseURL: BASE_URL,
// });
// export const userRequest = axios.create({
//   baseURL: BASE_URL,
//   headers: { token: `Bearer ${TOKEN} ` },
// });

import axios from "axios";
const BASE_URL = "http://localhost:5000/api/v1/";

// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//   .currentUser.accessToken;
// console.log(
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken
// );
// const persistedData = JSON.parse(localStorage.getItem("persist:root"));
// const accessToken =
//   persistedData && persistedData.user
//     ? JSON.parse(persistedData.user).currentUser.accessToken
//     : null;
const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmNkY2JhMDkxYWZmNGRmYjgwYjRkNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NDcyOTkyOSwiZXhwIjoxNjg0OTAyNzI5fQ.bgtLhgNcVhj9hysg2RojUuSTz6JcXPDGz6C3JWtmvYg";
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: accessToken ? { token: `Bearer ${accessToken}` } : {},
});
