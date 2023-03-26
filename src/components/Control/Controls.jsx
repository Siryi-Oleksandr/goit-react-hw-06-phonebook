import PropTypes from 'prop-types';
import { ControlWrapper, Button } from 'components/Control/Controls.styled';

export const Controls = ({ id }) => {
  return (
    <ControlWrapper>
      <Button type="button" onClick={() => console.log('😎')}>
        Edit
      </Button>
      <Button type="button" onClick={() => console.log('😍')}>
        Delete
      </Button>
    </ControlWrapper>
  );
};

export const ControlsSave = ({ id, onDeleteContact }) => {
  return (
    <ControlWrapper>
      <Button type="submit">Save</Button>
      <Button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </ControlWrapper>
  );
};

Controls.propTypes = {
  id: PropTypes.string.isRequired,
};

ControlsSave.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
