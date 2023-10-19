/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import ArtisanPage from "./pages/ArtisanPage/ArtisanPage";
import NavBar from "./components/Navbar/NavBar";
import NavContextProvider from "./contexts/NavContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Profile from "./pages/Profile";
import ArtisanProfile from "./pages/NewProfile/ArtisanProfile";
import ProductPage from "./pages/ProductPage/ProductPage";
import CartPage from "./pages/CartPage/CartPage";
import Footer from "./components/Footer/Footer";
import UserContextProvider, { UserContext } from "./contexts/userContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom"; // Import Navigate
import SearchPage from "./pages/SearchPage/SearchPage";

import CartContextProvider from "./contexts/CartContext";
const Root = () => {
  const queryClient = new QueryClient();
  // const { currentUser, logoutUser } = useContext(UserContext);

  return (
    <>
     <CartContextProvider>
      <UserContextProvider> {/* Make sure UserContextProvider wraps the entire application */}
        <NavContextProvider>
          <QueryClientProvider client={queryClient}>
            <NavBar />
            <ScrollRestoration />
            <Outlet />
            <Footer />
          </QueryClientProvider>
        </NavContextProvider>
      </UserContextProvider>
      </CartContextProvider>
    </>
  );
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
        path: "/register",
        element: <SignUp />
      },
      {
        path: "/search",
        element: <SearchPage />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/catpage/:id",
        element: <ArtisanPage />
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
      {
        path: "/cart",
        element: <CartPage /> // Add a valid CartPage element
      }
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
