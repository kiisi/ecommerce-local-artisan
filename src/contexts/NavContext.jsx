/* eslint-disable react/prop-types */
import { createContext,useState } from "react";

export const NavContext = createContext() 
const NavContextProvider = ({children}) =>{
    const [menu, setMenu] = useState(false)

    // useEffect(() => {
    //     const data = window.localStorage.getItem('CART');
    //     if ( data !== null ) setCart(JSON.parse(data));
    //   }, []);
    // useEffect(() => {
    //     window.localStorage.setItem('CART', JSON.stringify(cart));
    //   }, [cart]);

    return ( 
        <NavContext.Provider value={{menu, setMenu}} >
         {children}
        </NavContext.Provider>
 )
}
export default NavContextProvider