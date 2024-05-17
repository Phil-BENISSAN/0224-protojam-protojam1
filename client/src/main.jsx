import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Home from "./pages/Home";
import Stardex from './pages/Stardex.jsx';
import Trophies from "./pages/Trophies.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Stardex",
        element: <Stardex />,
      },
      {
        path: "/Trophies",
        element: <Trophies />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
