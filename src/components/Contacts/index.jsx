import { useState, useEffect } from "react";
import "./styles.css"

import Form from "./Form";
import List from "./List";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Emre",
      phone_number: "123456789",
    },
    {
      fullname: "John",
      phone_number: "987654321",
    },
    {
      fullname: "Jane",
      phone_number: "123456789",
    }
  ]);

  useEffect(() => {
  }, [contacts]);

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
