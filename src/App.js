// @ packages
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// @ own
import './App.scss';

const App = () => {
  const theme = createMuiTheme({
    typography: {
      fontFamily: 'Pacifico, cursive',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>Initial template</div>
    </ThemeProvider>
  );
}

export default App;
