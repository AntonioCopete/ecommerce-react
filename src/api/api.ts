import CONFIG from "../config/config";
import axios from "axios";

const signUp = async (form: any) => {
  const res = await axios.post(`${CONFIG.api.url}/user`, form);
  return res;
};

export { signUp };
