import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from "react-router-dom"
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

const Root = () => {

  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />
      },
      
    {
      path:"/login",
      element:<Login/>
    },
    
      
    {
      path:"/register",
      element:<SignUp/>
    },
    ],
  },
  
]);

export default function App() {
  return <RouterProvider router={router} />
}
