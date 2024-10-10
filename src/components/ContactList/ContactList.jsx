import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import style from './ContactList.module.css';
import { deleteContact, selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

const ContactList = () => {
  const dispatcher = useDispatch();

  const onDelete = id => {
    dispatcher(deleteContact(id));
  };

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={style.contactList}>
      {filteredContacts.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
          onDelete={() => onDelete(contact.id)}
        />
      ))}
    </ul>
  );
};

export default ContactList;