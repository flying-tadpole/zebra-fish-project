import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from './components/pages/ErrorPage.jsx';
import Home from './components/pages/Home';
import Lab from './components/pages/Lab/index.jsx';
import Health from './components/pages/Health/index.jsx';
import Census from './components/pages/Census/index.jsx';

import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/lab-list",
        element: <Lab />
      },
      {
        path: "/health-reports",
        element: <Health />
      },
      {
        path: "/census",
        element: <Census />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)
