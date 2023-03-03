import React from 'react';
import App from './App';
import * as ReactDOMClient from 'react-dom/client';
import About from './pages/about';
import Recent from './pages/recent';
import Artworks from './pages/artworks';
import Press from './pages/press';
import Contact from './pages/contact';
import {createBrowserRouter, RouterProvider, } from "react-router-dom"; 


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
      path: "artworks",
      element: <Artworks/>
    },
    {
      path: "recent",
      element: <Recent/>
    },
    {
      path: "about",
      element: <About/>
    },
    {
      path: "press",
      element: <Press/>
    },
    {
      path: "Contact",
      element: <Contact/>
    },

    
]);

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);


