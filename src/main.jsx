import React from 'react'
import ReactDOM from 'react-dom/client'  
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Route from './components/Route/Route';
import Home from './components/Home/Home';
import Donation from './components/Donation/Donation';
import Statistics from './components/Statistics/Statistics';
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Route/>,
    children: [
      {
        path:"/",
        element: <Home/>
      },
      {
        path: "/donation",
        element: <Donation/>
      },
      {
        path: "/statistics",
        element: <Statistics/>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
