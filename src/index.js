import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import './index.css';
import App from './App';
import Home from './home/Home';


const router = createBrowserRouter([

  {
    path: "/",
    element:  <App />,
  },

  {
    path: "/home",
    element: <Home/>
  },


]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>
);


