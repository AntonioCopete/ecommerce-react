import * as yup from "yup";

const registerSchema = yup.object().shape({
  email: yup.string().email("Email must be valid").required("Email is required"),
  username: yup
    .string()
    .required("Username is required")
    .min(6, "Username must have at least 6 characters")
    .max(20, "Username must have less than 20 characters"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must have at least 8 characters")
    .max(20, "Password must have less than 16 characters"),
});

export default registerSchema;
