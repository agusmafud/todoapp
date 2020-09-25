// @ packages
import React, { useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

// @ components
import Todos from 'components/views/Todos';

const TodosContainer = () => {
  const theme = useTheme();
  const compact = useMediaQuery(theme.breakpoints.down('sm'));

  const [todos, setTodos] = useState([]);
  const pendingTodos = todos
    .filter((todo) => !todo.completed)
    .sort((a, b) => a.id - b.id);
  const completedTodos = todos
    .filter((todo) => todo.completed)
    .sort((a, b) => a.id - b.id);

  const addTodo = (newTodo) => {
    const timestamp = Date.now();
    setTodos([
      ...todos,
      {
        id: timestamp,
        todo: newTodo,
        completed: false,
      },
    ]);
  };
  const removeTodo = (removedTodo) => (
    setTodos(todos.filter((todo) => todo.id !== removedTodo.id))
  );
  const toggleTodo = (toggleTodoId) => (
    setTodos(
      todos.map((todo) => (
        todo.id === toggleTodoId
          ? { ...todo, completed: !todo.completed }
          : todo
      )),
    )
  );
  const updateTodo = (updateTodoId, updateTodoText) => (
    setTodos(
      todos.map((todo) => (
        todo.id === updateTodoId
          ? { ...todo, todo: updateTodoText }
          : todo
      )),
    )
  );

  return (
    <Todos
      pendingTodos={pendingTodos}
      completedTodos={completedTodos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      toggleTodo={toggleTodo}
      updateTodo={updateTodo}
      compact={compact}
    />
  );
};

export default TodosContainer;
