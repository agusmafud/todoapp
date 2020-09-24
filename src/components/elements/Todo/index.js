// @ packages
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';

// @ utils
import { TodoPropTypes } from 'utils/propTypesConstants';
import { todoCheckboxAriaLabel, deleteTodoAriaLabel } from 'utils/messages';

// @ own
import './styles.scss';

const Todo = ({
  className,
  todo,
  toggleTodo,
  removeTodo,
  updateTodo,
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={cn('todo', className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <TextField
        variant="outlined"
        multiline
        fullWidth
        defaultValue={todo.todo}
        onChange={(e) => updateTodo(todo.id, e.target.value)}
        InputProps={{
          startAdornment: (
            <Checkbox
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              color="secondary"
              inputProps={{ 'aria-label': todoCheckboxAriaLabel(todo) }}
            />
          ),
          endAdornment: hovered && (
            <InputAdornment position="end">
              <IconButton
                onClick={() => removeTodo(todo)}
                aria-label={deleteTodoAriaLabel(todo)}
              >
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

Todo.propTypes = {
  className: PropTypes.string,
  todo: TodoPropTypes.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
};

Todo.defaultProps = {
  className: '',
};

export default Todo;
