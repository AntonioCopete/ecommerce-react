import CONFIG from "../config/config";
import axios from "axios";

const signUp = async (form: any) => {
  const res = await axios.post(`${CONFIG.api.url}/auth/signup`, form);
  return res;
};

const signIn = async (form: any) => {
  const res = await axios.post(`${CONFIG.api.url}/auth/signin`, form);
  return res;
};

export { signUp, signIn };
