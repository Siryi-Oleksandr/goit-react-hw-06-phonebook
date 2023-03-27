import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import { FilterLabel, Input } from './Filter.styled';

function Filter() {
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

export default Filter;
