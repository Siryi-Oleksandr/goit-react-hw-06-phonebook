import { configureStore, nanoid } from '@reduxjs/toolkit';
// import { rootReducer } from './reducer';
// import { addContact } from './actions';
import { createAction, createReducer } from '@reduxjs/toolkit';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const addContact = createAction(
  'contacts/addContact',
  (name, number) => {
    return {
      payload: {
        id: nanoid(),
        name,
        number,
      },
    };
  }
);
const deleteContact = createAction('contacts/deleteContact');
const editContact = createAction('contacts/editContact');
const filterContact = createAction('filter/filterContact');

const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    state.push(action.payload);
  },
  [deleteContact]: (state, action) => {
    const index = state.findIndex(contact => contact.id === action.payload);
    state.splice(index, 1);
  },
  [editContact]: (state, action) => state,
});

const filterReducer = createReducer('', {
  [filterContact]: (state, action) => state,
});

// ! //////////////////
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
