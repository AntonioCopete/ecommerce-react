import { signUp } from "../../api/api";
import Form from "../../components/Base/Form/Form";
import "./Register.scss";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const sendForm = async (formValues: any) => {
    console.log(formValues);

    const res = await signUp(formValues);
    console.log(res);

    if (res.status === 200) {
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
    <main className="register-form">
      <Form view={"register"} fields={["email", "username", "password"]} submit={sendForm} />
    </main>
  );
};

export default Register;
