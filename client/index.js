import React from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink,  } from '@apollo/client';
import {  RouterProvider, createHashRouter } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import App from './components/App';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './components/Dashboard';

// const link = createHttpLink({
//   credentials: 'same-origin',
//   uri: 'http://localhost:4000/graphql'
// })

const client = new ApolloClient({
  cache: new InMemoryCache({
    dataIdFromObject: o => o.id
  }),
  // link
  uri: 'http://localhost:4000/graphql'
})

const hashRouter = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        index: true,
        element: <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute> 
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      }
    ]
  }
])

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={hashRouter} />
    </ApolloProvider>
  );
};

const root = createRoot(document.querySelector('#root'))
root.render(<Root />)
