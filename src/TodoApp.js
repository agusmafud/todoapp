// @ packages
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// @ components
import TodosContainer from 'containers/TodosContainer';

const TodoApp = () => {
  const theme = createMuiTheme({
    typography: {
      fontFamily: 'cursive',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TodosContainer />
    </ThemeProvider>
  );
};

export default TodoApp;
