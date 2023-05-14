import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import {
  deleteOrderStart,
  deleteOrderSuccess,
  deleteOrderFailure,
  getOrderByIdStart,
  getOrderByIdSuccess,
  getOrderByIdFailure,
} from "./orderRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

// get order by ID
// export const getOrderById = async (dispatch, id) => {
//   dispatch(getOrderByIdStart());
//   try {
//     const res = await userRequest.get(`/orders/${id}`);
//     // console.log(res.data);
//     dispatch(getOrderByIdSuccess(res.data));
//   } catch (err) {
//     dispatch(getOrderByIdFailure());
//   }
// };

// get by id
export const getOrderById = async (dispatch, id) => {
  dispatch(getOrderByIdStart());
  try {
    const res = await userRequest.get(`/orders/${id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    dispatch(getOrderByIdSuccess(res.data));
  } catch (err) {
    dispatch(getOrderByIdFailure());
  }
};

//delete order
export const deleteOrder = async (id, dispatch) => {
  dispatch(deleteOrderStart());
  try {
    const res = await userRequest.delete(`/orders/${id}`);
    dispatch(deleteOrderSuccess(id));
  } catch (err) {
    dispatch(deleteOrderFailure());
  }
};
