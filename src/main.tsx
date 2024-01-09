import React  from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import { RootLayout } from "@/routes/root"
import App from './App';
import { ThemeProvider } from './components/theme/theme-provider';
import Servers from './routes/servers/servers';
import { Auth0Provider } from '@auth0/auth0-react';


const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/servers",
        element: <Servers />
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
<Auth0Provider
        domain="osmono.uk.auth0.com"
        clientId="hxN4q7AGQ2bNQvIjAh1hUUMk4qMn3HcX"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
    >

    <RouterProvider router={router} />
    </Auth0Provider>

    </ThemeProvider>
  </React.StrictMode>,
)
