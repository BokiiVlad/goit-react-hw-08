import { useEffect } from "react";
import { useDispatch } from "react-redux";
import fetchContacts from "../../redux/contacts/operations";

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
};
export default ContactsPage;
