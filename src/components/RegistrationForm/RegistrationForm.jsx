import { Field, Form, Formik } from "formik";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (value, action) => {
    dispatch(register(value));
    action.resetForm();
    console.log(value);
  };

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label className={css.label} htmlFor="name">
            Name
          </label>
          <Field className={css.input} name="name" id="name" type="text" />
          <label className={css.label} htmlFor="email">
            Email
          </label>
          <Field className={css.input} name="email" id="email" type="email" />
          <label className={css.label} htmlFor="password">
            Password
          </label>
          <Field
            className={css.input}
            name="password"
            id="password"
            type="password"
          />

          <button className={css.button} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </>
  );
};
export default RegistrationForm;
