import { signUp } from "../../api/api";
import Form from "../../components/Base/Form/Form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import registerSchema from "../../schemas/registerSchema";
import { useState } from "react";

const Register = () => {
  const [msg, setMsg] = useState();
  const navigate = useNavigate();
  const sendForm = async (formValues: any) => {
    const res = await signUp(formValues);

    if (res.error) {
      return setMsg(res.error);
    }
    if (res.success) {
      return Swal.fire({
        icon: "success",
        title: "Sign up success",
        html: "<p class='mt-3'>You account has been created.</p> <p>Now you can log in with your account</p>",
        confirmButtonText: "Log in",
        confirmButtonColor: "green",
        allowOutsideClick: false,
        allowEscapeKey: false,
        didClose: () => navigate("/login"),
      });
    }
  };

  return (
    <Form
      view={"register"}
      fields={["email", "username", "password"]}
      submit={sendForm}
      schema={registerSchema}
      msg={msg}
    />
  );
};

export default Register;
