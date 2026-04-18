import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import rootLayout from './layout/rootLayout';
import Home from './pages/home page/Home';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import FriendDetails from './pages/FriendDetails/FriendDetails';
import TimeLine from './pages/TimeLIne/TimeLine';
import Fndprovider from './context/Fndprovider';
import { ToastContainer } from 'react-toastify';
import Status from './pages/Status/Status';


const router = createBrowserRouter([
  {
    path: "/",
    Component: rootLayout,
    children: [
      {
        index: true,

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
        element: <TimeLine></TimeLine>
      },
      {
        path: "/status",
        element: <Status></Status>
      }
    ],
    errorElement: <ErrorPage></ErrorPage>



  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Fndprovider>
      <RouterProvider router={router} />
      <ToastContainer />
    </Fndprovider>

  </StrictMode>,
)
