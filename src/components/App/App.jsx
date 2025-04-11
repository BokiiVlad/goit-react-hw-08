import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
// import {
//   selectContacts,
//   selectError,
//   selectLoading,
// } from "../../redux/contacts/slice";
import Layout from "../Layout/Layout";
import { Route, Routes } from "react-router-dom";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";
import HomePage from "../../pages/HomePage/HomePage";

function App() {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectLoading);
  // const error = useSelector(selectError);
  // const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
