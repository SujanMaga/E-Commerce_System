import axios from "axios";
const BASE_URL = "http://localhost:5000/api/v1";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmNkY2JhMDkxYWZmNGRmYjgwYjRkNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3OTQ4NjA0MSwiZXhwIjoxNjc5NjU4ODQxfQ.b4Gf7PC437VqKlbe9z_OzgE8SGmlcjOTH6K9c6MFD5c";

// console.log(
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken
// );
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
