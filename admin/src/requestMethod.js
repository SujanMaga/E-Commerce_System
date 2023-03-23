import axios from "axios";
const BASE_URL = "http://localhost:5000/api/v1";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmNkY2JhMDkxYWZmNGRmYjgwYjRkNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3OTU4ODY2NywiZXhwIjoxNjc5NzYxNDY3fQ.sx9acN3-ozS_UmSPE5TUi_3t8hRP87JXk-8GC5p_EQ4";

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
