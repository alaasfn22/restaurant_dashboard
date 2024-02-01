/* eslint-disable react/prop-types */
import {createContext, useContext, useEffect, useState} from "react";

export const useContextAPi = () => {
  return useContext(ContextApi);
};
export const ContextApi = createContext();

const ContextApiProvider = ({children}) => {
  const [open, setOpen] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"));
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
  };
  return (
    <ContextApi.Provider value={{open, setOpen, theme, toggleTheme}}>
      {children}
    </ContextApi.Provider>
  );
};

export default ContextApiProvider;
