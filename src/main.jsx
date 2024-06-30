import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
//import error boundry
import ErrorBoundary from './errorBoundry.jsx';
//import userContext
import { UserProvider } from './context/userContext.jsx'; 

import './styles/index.css'
import ApplicationRoutes from './utils/routes/routes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <ErrorBoundary>
              <UserProvider>
                <App />
                <ApplicationRoutes/>
              </UserProvider>
          </ErrorBoundary>
      </BrowserRouter>
  </React.StrictMode>,
)
