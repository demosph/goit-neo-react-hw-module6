import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useSelector } from "react-redux";
import { selectContacts } from "./redux/contactsSlice";

function App() {
  const contacts = useSelector(selectContacts);
  return (
    <div className="app">
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.length > 0 && <SearchBox />}
      <ContactList />
    </div>
  );
}

export default App;
