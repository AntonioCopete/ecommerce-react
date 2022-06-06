import CONFIG from "../config/config";
import axios from "axios";

const signUp = async (form: any) => {
  const { data } = await axios.post(`${CONFIG.API.URL}/auth/signup`, form);
  return data;
};

const signIn = async (form: any) => {
  const { data } = await axios.post(`${CONFIG.API.URL}/auth/signin`, form);
  return data;
};

const fetchProducts = async () => {
  const { data } = await axios.get(`${CONFIG.API.URL}/products`);
  return data;
};

const fetchProduct = async (productName: any) => {
  const { data } = await axios.get(`${CONFIG.API.URL}/products/${productName}`);
  return data;
};

export { signUp, signIn, fetchProducts, fetchProduct };
