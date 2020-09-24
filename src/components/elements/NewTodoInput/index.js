// @ packages
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import AddBoxIcon from '@material-ui/icons/AddBox';

// @ own
import './styles.scss';

const NewTodoInput = ({
  className,
  addTodo,
  newTodoPlaceholderMessage,
  newTodoActionMessage,
}) => {
  const [todoInput, setTodoInput] = useState('');
  const handleNewTodo = () => {
    addTodo(todoInput);
    setTodoInput('');
  };
  const handleOnKeyPress = (e) => {
    if (todoInput === '' && e.key === 'Enter') {
      e.preventDefault();
    } else if (e.key === 'Enter') {
      handleNewTodo();
      e.preventDefault();
    }
  };
  return (
    <div className={cn('new-todo-input', className)}>
      <TextField
        type="submit"
        id="new-todo-input__text-field"
        label={newTodoPlaceholderMessage}
        variant="filled"
        multiline
        fullWidth
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        onKeyPress={handleOnKeyPress}
        onBlur={() => todoInput !== '' && handleNewTodo()}
        InputProps={{
          endAdornment: todoInput !== '' && (
            <InputAdornment position="end">
              <IconButton
                color="primary"
                onClick={handleNewTodo}
                aria-label={newTodoActionMessage}
              >
                <AddBoxIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

NewTodoInput.propTypes = {
  className: PropTypes.string,
  addTodo: PropTypes.func.isRequired,
  newTodoPlaceholderMessage: PropTypes.string.isRequired,
  newTodoActionMessage: PropTypes.string.isRequired,
};

NewTodoInput.defaultProps = {
  className: '',
};

export default NewTodoInput;
