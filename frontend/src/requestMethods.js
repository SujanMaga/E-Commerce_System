import axios from "axios";
const BASE_URL = "http://localhost:5000/api/v1";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmNkY2JhMDkxYWZmNGRmYjgwYjRkNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjU3OTU0MCwiZXhwIjoxNjgyNzUyMzQwfQ.cbioETcCeIZ_FN8CQleijeqkj8fdMIq8aj27y8ISAKw";
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
