import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from "react-router-dom"
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

import ArtisanPage from "./pages/ArtisanPage/ArtisanPage";
import NavBar from "./components/Navbar/NavBar";
import NavContextProvider from "./contexts/NavContext";

import Profile from "./pages/Profile";
import ArtisanProfile from "./pages/NewProfile/ArtisanProfile";
import ProductPage from "./pages/ProductPage/ProductPage";


const Root = () => {

  return (
    <>
    <NavContextProvider>


    <NavBar/>
      <ScrollRestoration />
      <Outlet />
          </NavContextProvider>
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
    {
      path:"/catpage/:id",
      element:<ArtisanPage/>
    },

      
      {
        path: "/profile",
        element: <Profile />
      },
      
      {
        path: "/newprofile/:id",
        element: <ArtisanProfile />
      },

      {
        path: "/product/:id",
        element: <ProductPage />
      },
    ],
  },

]);

export default function App() {
  return <RouterProvider router={router} />
}
