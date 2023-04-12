// React
import React from 'react'
import ReactDOM from 'react-dom/client'
// Fonts
// CC
import theme from './utils/theme';
import App from './App'
import { ChakraProvider } from '@chakra-ui/react';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
