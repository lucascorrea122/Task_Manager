import React, {useState} from 'react';
import Home from './stories/pages/home/home.component'

import GlobalStyles from './styles/global.styles';
import { ThemeProvider } from 'styled-components';

import dark from './styles/themes/dark';
import light from './styles/themes/light';

function App() {
  const [theme, setTheme] = useState(dark);

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark);
  }

  return (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Home toggleTheme={toggleTheme}/>
    </ThemeProvider>
  );
}

export default App;
