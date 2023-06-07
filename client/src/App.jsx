import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Projects } from './pages/Projects';
import { ProjectDetails } from './pages/ProjectDetails';
import { Dashboard } from './pages/Dashboard';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql ',
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/projects/:id',
    element: <ProjectDetails />,
  },
]);

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
};
