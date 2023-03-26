import React from 'react';
import { FormStyled, FormLabel, Input, Button } from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/store';

const nameRegExp = "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
const phoneRegExp =
  '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    dispatch(addContact(name, number));
    form.reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit} autoComplete="off">
      <FormLabel>
        Name
        <Input
          type="text"
          name="name"
          pattern={nameRegExp}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </FormLabel>
      <FormLabel>
        Number
        <Input
          type="tel"
          name="number"
          pattern={phoneRegExp}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
      </FormLabel>
      <Button type="submit">Add contact</Button>
    </FormStyled>
  );
};

export default ContactForm;
