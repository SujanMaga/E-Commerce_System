import axios from "axios";
const BASE_URL = "http://localhost:5000/api/v1";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmNkY2JhMDkxYWZmNGRmYjgwYjRkNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MDUwOTY5NywiZXhwIjoxNjgwNjgyNDk3fQ.embLpqL_bdI4rgjzIFIa4ApfqFxvd5yVg1VrrlxXgNA";
// console.log(
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken
// );
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
