import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './home-page.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <HomePage />
    </ChakraProvider>
  </React.StrictMode>,
)
