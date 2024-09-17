import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import HomePage from '../src/Pages/HomePage/HomePage'
import About from '../src/Pages/About/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './Components/Layout/Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
       { path: "aboutus", element: <About /> },
      // { path: "mylibrary", element: <MyLibraryPage /> },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

