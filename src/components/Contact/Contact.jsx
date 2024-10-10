import { useDispatch } from 'react-redux';
import style from './Contact.module.css';
import { deleteContact } from '../../redux/contactsSlice';

const Contact = ({ contact }) => {
  const dispatcher = useDispatch();
  const onDelete = () => {
    dispatcher(deleteContact(contact.id));
  };

  return (
    <li className={style.contact}>
      <div>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>
      <div>
        <button type="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default Contact;