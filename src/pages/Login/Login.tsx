import { useNavigate } from "react-router-dom";
import { signIn } from "../../api/api";
import Form from "../../components/Base/Form/Form";

const Login = () => {
  const navigate = useNavigate();

  const sendForm = async (formValues: any) => {
    const res = await signIn(formValues);
    console.log(res);

    if (res.status === 200) {
      navigate("/");
    }
  };
  return (
    <main className="register-form">
      <Form view={"login"} fields={["email", "password"]} submit={sendForm} />
    </main>
  );
};

export default Login;
