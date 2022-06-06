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

const fetchCategories = async () => {
  const { data } = await axios.get(`${CONFIG.API.URL}/categories`);
  return data;
};

const fetchCategoryProducts = async (categoryName: any) => {
  const { data } = await axios.get(`${CONFIG.API.URL}/categories/${categoryName}/products`);
  return data;
};

export { signUp, signIn, fetchProducts, fetchProduct, fetchCategories, fetchCategoryProducts };
