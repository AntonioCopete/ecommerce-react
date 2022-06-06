import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup.string().email("Email must be valid").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must have at least 8 characters")
    .max(20, "Password must have less than 16 characters"),
});

export default loginSchema;
