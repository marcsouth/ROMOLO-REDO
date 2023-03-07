import React from 'react';
import App from './App';
import * as ReactDOMClient from 'react-dom/client';
import About from './pages/about';
import Recent from './pages/recent';
import Artworks from './pages/artworks';
import Press from './pages/press';
import Contact from './pages/contact';
import {createBrowserRouter, RouterProvider, } from "react-router-dom"; 
import Bertawalker from './pages/recentpages/bertawalker';
import Gigantic from './pages/recentpages/gigantic';
import Idealspaces from './pages/recentpages/idealspaces';
import Venice from './pages/recentpages/Venice22';
import Venice2 from './pages/recentpages/venicepart2';



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
      path: "Recent",
      element: <Recent/>
    },
    {
      path: "About",
      element: <About/>
    },
    {
      path: "Press",
      element: <Press/>
    },
    {
      path: "BertaWalker",
      element: <Bertawalker/>
    },
    {
      path: "Gigantic",
      element: <Gigantic/>
    },
    {
      path: "Idealspaces",
      element: <Idealspaces/>
    },
    {
      path: "Venice",
      element: <Venice/>
    },
    {
      path: "Venice2",
      element: <Venice2/>
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


