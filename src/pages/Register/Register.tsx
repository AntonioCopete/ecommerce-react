import { useForm } from "react-hook-form";
import { signUp } from "../../api/api";
import "./Register.scss";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const sendForm = (formValues: any) => {
    console.log(formValues);
    signUp(formValues);
  };

  return (
    <main className="register-form">
      <form
        className="register-form d-flex flex-column border p-4"
        onSubmit={handleSubmit((formValues) => sendForm(formValues))}
      >
        <div className="d-flex my-3 align-items-center">
          <label htmlFor="register-email" className="col-3 pe-2 text-end fw-bold">
            Email:
          </label>
          <input id="register-email" className="col-9" {...register("email")} />
        </div>
        <div className="d-flex my-3 align-items-center">
          <label htmlFor="register-username" className="col-3 pe-2 text-end fw-bold">
            Username:
          </label>
          <input id="register-username" className="col-9" {...register("username")} />
        </div>
        <div className="d-flex my-3 align-items-center">
          <label htmlFor="register-password" className="col-3 pe-2 text-end fw-bold">
            Password:
          </label>
          <input
            id="register-password"
            className="col-9"
            type="password"
            {...register("password")}
          />
        </div>
        <div className="d-flex justify-content-between mt-4 mx-4">
          <input type="reset" value="Reset" className="btn btn-secondary" />
          <input type="submit" value="Sign up" className="btn btn-success" />
        </div>
      </form>
    </main>
  );
};

export default Register;
