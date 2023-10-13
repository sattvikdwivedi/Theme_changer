import { createContext,useContext } from "react";
 export const contextTheme=createContext({
    themeMode:"light",
   darkTheme:({}),
   lightTheme:({}),
})
export const ThemeProvider=contextTheme.Provider
export default function usetheme() {
       return  useContext(contextTheme);
}



