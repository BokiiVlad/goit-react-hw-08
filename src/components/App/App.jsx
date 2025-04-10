import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/contactsOps";
import {
  selectContacts,
  selectError,
  selectLoading,
} from "../../redux/contacts/contactsSelectors";
import { Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {/* <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/contacts" element={<ContactsPage />} /> */}
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <>Loading...</>}
      {error && <>An error occurred...</>}
      {contacts.length > 0 && <ContactList />}
    </div>
  );
}

export default App;
