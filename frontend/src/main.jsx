import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { ApolloProvider } from '@apollo/client';
// import client from './utils/client';
import HomePage from './pages/homepage.jsx';
import ErrorPage from './pages/errorpage.jsx';
import ServicePage from './pages/servicepage.jsx';


import App from './app';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/services',
        element: <ServicePage />
      },



    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ApolloProvider client={client}> */}
    <RouterProvider router={router} />
    {/* </ApolloProvider> */}
  </React.StrictMode>,
);