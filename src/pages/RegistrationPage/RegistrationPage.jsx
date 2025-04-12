import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  return (
    <>
      <h2 className={css.title}>Register your account</h2>
      <RegistrationForm />
    </>
  );
};
export default RegistrationPage;
