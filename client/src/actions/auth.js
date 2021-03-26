import * as api from "../api";
import { AUTH } from "../constants/actionTypes";

export const signin = (formData, router) => async (dispatch) => {
  console.log("formData: ", formData);
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    router.push("/");
  } catch (error) {
    console.log("error: ", error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    // sign up the user

    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    router.push("/");
  } catch (error) {
    console.log("error: ", error);
  }
};
