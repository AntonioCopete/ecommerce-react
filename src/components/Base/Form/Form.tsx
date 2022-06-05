import { useForm } from "react-hook-form";

const Form = ({ view, fields, submit }: any) => {
  const { register, handleSubmit } = useForm();

  return (
    <main className="form">
      <form
        className="form d-flex flex-column border p-4"
        onSubmit={handleSubmit((formValues) => submit(formValues))}
      >
        {fields.map((field: string) => {
          return (
            <div key={field} className="d-flex my-3 align-items-center">
              <label htmlFor={`${view}-${field}`} className="col-3 pe-2 text-end fw-bold">
                {field.charAt(0).toUpperCase() + field.slice(1)}:
              </label>
              <input id={`${view}-${field}`} className="col-9" {...register(`${field}`)} />
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
        <div className="d-flex justify-content-between mt-4 mx-4">
          <input type="reset" value="Reset" className="btn btn-secondary" />
          <input type="submit" value="Sign up" className="btn btn-success" />
        </div>
      </form>
    </main>
  );
};

export default Form;
