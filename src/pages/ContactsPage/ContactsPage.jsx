import ContactForm from "../../components/ContactForm/ContactForm.jsx";
import SearchBox from "../../components/SearchBox/SearchBox.jsx";
import ContactList from "../../components/ContactList/ContactList.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import {
  selectContacts,
  selectError,
  selectLoading,
} from "../../redux/contacts/selectors.js";
import css from "./ContactsPage.module.css";

function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <div className={css.formWrapper}>
        <div>
          <p>Add contact</p>
          <ContactForm />
          <SearchBox />
        </div>
        {isLoading && <>Loading...</>}
        {error && <>An error occurred...</>}
        {contacts.length > 0 && <ContactList />}
      </div>
    </div>
  );
}

export default ContactsPage;
