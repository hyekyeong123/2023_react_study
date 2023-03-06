import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Main from "./pages/Main";
import Aaa from "./pages/Aaa";
import Bbb from "./pages/Bbb";
import Ccc from "./pages/Ccc";
import Ddd from "./pages/Ddd";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter ([
  {
    path: '/',
    element: <App/>,

    children: [
      {index: true, path: "/", element: <Main/>},
      {path: '/aaa', element: <Aaa/>},
      {path: '/bbb', element: <Bbb/>},
      {path: '/ccc', element: <Ccc/>},
      {path: '/ddd', element: <Ddd/>},
    ]
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
