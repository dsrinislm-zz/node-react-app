import React from 'react';
import { useRoutes } from 'react-router-dom-next';
import Client1 from './components/Client1';
import Client2 from './components/Client2';
import Client3 from './components/Client3';
import AllClients from './components/AllClients';
import Layout from './components/Layout';
const RouterOutput = () =>
  useRoutes([
    {
      path: '/',
      element: (
        <Layout title="Stock Changes from Stock Exchange Server" />
      ),
      children: [
        { path: '/', element: <AllClients /> },
        { path: '/client1', element: <Client1 /> },
        { path: '/client2', element: <Client2 /> },
        { path: '/client3', element: <Client3 /> },
      ],
    },
  ]);
export default RouterOutput;
