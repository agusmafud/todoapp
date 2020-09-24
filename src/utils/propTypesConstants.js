// @ packages
import PropTypes from 'prop-types';

export const TodoPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  todo: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
});
