// @ packages
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// @ components
import TodosContainer from 'containers/TodosContainer';

// @ own
import './styles.scss';

const TodoApp = () => {
  const theme = createMuiTheme({
    typography: {
      fontFamily: 'Pacifico, cursive',
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
