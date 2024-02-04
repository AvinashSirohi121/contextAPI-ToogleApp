import { createContext, useState } from "react";

export const ThemeContext = createContext();


// eslint-disable-next-line react/prop-types
export  function ThemeContextProvider({children}){
    const [theme,setTheme] = useState(false);
    
    const value={
        theme,setTheme
    }
    return <ThemeContext.Provider value={value}>
        {children}
    </ThemeContext.Provider>
}