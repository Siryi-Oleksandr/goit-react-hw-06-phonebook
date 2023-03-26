import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';
import { FilterLabel, Input } from './Filter.styled';

function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleSetFilter = evt => {
    dispatch(filterContacts(evt.currentTarget.value));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <Input type="text" onChange={handleSetFilter} />
    </FilterLabel>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;

// const filterList = () => {
//   const normalizedFilter = filter.toLocaleLowerCase();
//   const visibleContacts = contacts.filter(contact =>
//     contact.name.toLocaleLowerCase().includes(normalizedFilter)
//   );
//   return visibleContacts;
// };

// const changeFilter = evt => {
//   setFilter(evt.currentTarget.value);
// };
