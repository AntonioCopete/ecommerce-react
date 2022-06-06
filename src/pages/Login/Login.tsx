import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../api/api";
import Form from "../../components/Base/Form/Form";
import { useAuth } from "../../context/AuthContext";
import loginSchema from "../../schemas/loginSchema";

const Login = () => {
  const [msg, setMsg] = useState();

  const { login } = useAuth();
  const navigate = useNavigate();

  const sendForm = async (formValues: any) => {
    const res = await signIn(formValues);

    if (res.error) {
      return setMsg(res.error);
    }
    if (res.success) {
      setMsg(res.success);
      login(res.user);
      navigate("/");
    }
  };
  return (
    <Form
      view={"login"}
      fields={["email", "password"]}
      submit={sendForm}
      schema={loginSchema}
      msg={msg}
    />
  );
};

export default Login;
