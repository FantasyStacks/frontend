import axios from "axios";

import { SIGN_IN, SIGN_OUT, SIGN_UP, CHECK_SIGN_IN } from "../constants/types";
import { DOMAIN } from '../constants'

export const signin = (credentials) => ({
  type: SIGN_IN,
  payload: axios.post(`${DOMAIN}/user/signin`, credentials, {withCredentials: true})
});

export const signout = (credentials) => ({
  type: SIGN_OUT,
  payload: axios.post(`${DOMAIN}/user/signout`, credentials, {withCredentials: true})
});

export const signup = (credentials) => ({
  type: SIGN_UP,
  payload: axios.post(`${DOMAIN}/user/signup`, credentials, {withCredentials: true})
});

export const checkSignin = () => ({
  type: CHECK_SIGN_IN,
  payload: axios.get(`${DOMAIN}/user`, {withCredentials: true})
});