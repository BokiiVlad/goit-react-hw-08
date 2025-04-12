import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    dispatch(login(values));
    action.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor="name">
          Name
        </label>
        <Field className={css.input} name="name" type="text" id="name" />
        <label className={css.label} htmlFor="password">
          Password
        </label>
        <Field
          className={css.input}
          name="password"
          type="password"
          id="password"
        />
        <button className={css.button} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
};
export default LoginForm;
