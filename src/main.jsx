// React
import React from 'react'
import ReactDOM from 'react-dom/client'
// Fonts
import '@fontsource/karla/200.css';
import '@fontsource/karla/300.css';
import '@fontsource/karla/400.css';
import '@fontsource/karla/500.css';
import '@fontsource/karla/600.css';
import '@fontsource/karla/700.css';
import '@fontsource/karla/800.css';
// CC
import theme from './utils/theme';
import App from './App'
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
