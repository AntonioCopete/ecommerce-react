import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";
import "./Form.scss";

const Form = ({ view, fields, submit, schema, msg }: any) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <form
      className="form d-flex flex-column border px-4 py-4"
      onSubmit={handleSubmit((formValues) => submit(formValues))}
    >
      {fields.map((field: string, index: number) => {
        return (
          <div key={field} className="d-flex flex-column">
            <div className="d-flex my-3 align-items-center">
              <label htmlFor={`${view}-${field}`} className="col-3 pe-2 text-end fw-bold">
                {field.charAt(0).toUpperCase() + field.slice(1)}:
              </label>
              <input
                type={field === "password" ? "password" : "text"}
                id={`${view}-${field}`}
                className="col-9"
                {...register(`${field}`)}
              />
            </div>
            <ErrorMessage
              errors={errors}
              name={field}
              render={() => (
                <>
                  {!msg && (
                    <p className="text-center text-danger fw-bold">
                      {errors?.[`${field}`]?.message}
                    </p>
                  )}
                </>
              )}
            />
          </div>
        );
      })}

      {/* 
        <div className="d-flex my-3 align-items-center">
          <label htmlFor={`${view}-email`} className="col-3 pe-2 text-end fw-bold">
            Email:
          </label>
          <input id={`${view}-email`} className="col-9" {...register("email")} />
        </div>
        <div className="d-flex my-3 align-items-center">
          <label htmlFor={`${view}-username`} className="col-3 pe-2 text-end fw-bold">
            Username:
          </label>
          <input id={`${view}-username`} className="col-9" {...register("username")} />
        </div>
        <div className="d-flex my-3 align-items-center">
          <label htmlFor={`${view}-password`} className="col-3 pe-2 text-end fw-bold">
            Password:
          </label>
          <input
            id={`${view}-password`}
            className="col-9"
            type="password"
            {...register("password")}
          />
        </div>*/}
      <p className="text-center text-danger fw-bold">{msg}</p>

      <div className="d-flex justify-content-between mt-4 mx-4">
        <input type="reset" value="Reset" className="btn btn-secondary" />
        <input type="submit" value="Sign up" className="btn btn-success" />
      </div>
    </form>
  );
};

export default Form;
