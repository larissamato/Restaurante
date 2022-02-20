import React from 'react';
import { ThemeProvider } from 'node_modules/styled-components/dist/styled-components.cjs';
import theme from './theme';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Home />
    </ThemeProvider>
  
  );
}

export default App;
