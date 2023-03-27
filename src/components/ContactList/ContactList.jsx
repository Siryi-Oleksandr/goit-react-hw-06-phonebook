import ContactItem from 'components/ContactItem';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';

function ContactList() {
  const contacts = useSelector(getFilteredContacts);
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id} name={name} number={number} id={id} />
      ))}
    </ul>
  );
}

export default ContactList;
