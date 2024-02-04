import { useContext, useEffect } from "react";
import { ThemeContext } from "./Context";


export default function ToggleButton() {
  const {theme, setTheme}= useContext(ThemeContext)
  const toggleButton = (theme) =>{
    setTheme(!theme)
  }
  useEffect(()=>{
    document.querySelector('html').classList.remove("dark","light")
    if(theme==true){
      document.querySelector('html').classList.add("dark")    
    }else{
      document.querySelector("html").classList.add("light");  
    } 
  },[theme])
 
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onChange={()=>toggleButton(theme)}
       
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span className="ml-3 text-md font-semibold dark:text-gray-900 text-white">
        Toggle Theme
      </span>
    </label>
  );
}
