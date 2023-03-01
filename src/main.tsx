import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from './styles/theme';
import App from './App';
import { VerificationModalProvider } from './contexts/Verifications';
import { GetProductsProvider } from './contexts/GetProducts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <VerificationModalProvider>
          <GetProductsProvider>
            <App />
          </GetProductsProvider>
        </VerificationModalProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
