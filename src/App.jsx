import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from "react-router-dom"
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import ArtisanPage from "./pages/ArtisanPage/ArtisanPage";
import NavBar from "./components/Navbar/NavBar";
import NavContextProvider from "./contexts/NavContext";

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
    ],
  },
  
]);

export default function App() {
  return <RouterProvider router={router} />
}
