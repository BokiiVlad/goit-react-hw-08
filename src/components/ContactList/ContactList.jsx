import { useDispatch, useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/slice";
import css from "./ContactList.module.css";

import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

export default function ContactList() {
  const dispatch = useDispatch();
  const task = useSelector(selectFilteredContacts);

  const handleDelete = (id) => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.success("Contact deleted.");
      })
      .catch(() => toast.error("Error, please reload the page."));
  };

  return (
    <div className={css.contactsList}>
      <p className={css.title}>Contacts</p>
      <List>
        {task.map((contact) => (
          <ListItem
            className={css.item}
            key={contact.id}
            secondaryAction={
              <IconButton
                onClick={() => handleDelete(contact.id)}
                edge="end"
                aria-label="delete"
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: "#b3d9ff" }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="../../../public/icon/pngegg.png"
                  alt="fase"
                />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={contact.name} secondary={contact.number} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
