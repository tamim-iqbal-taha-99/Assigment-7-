import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import rootLayout from './layout/rootLayout';
import Home from './pages/home page/Home';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import FriendDetails from './pages/FriendDetails/FriendDetails';


const router = createBrowserRouter([
  {
    path: "/",
    Component: rootLayout,
    children: [
      {
        path: "/",

        element: <Home></Home>
      },
      {
        path: "details/:id",
        loader: async ({ params }) => {
          const res = await fetch("/UserData.json");
          const data = await res.json();

          return data.find(user => user.id === Number(params.id));
        },
        element: <FriendDetails />
      },

      {
        path: "/timeline",
        element: <h1>timeline</h1>
      },
      {
        path: "/status",
        element: <h1>status</h1>
      }
    ],
    errorElement: <ErrorPage></ErrorPage>



  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
