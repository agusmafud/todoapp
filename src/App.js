// @ packages
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// @ own
import './App.css';

const App = () => {
  const theme = createMuiTheme({
    typography: {
      fontFamily: 'Quicksand, sans-serif',
      fontSize: 16,
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
