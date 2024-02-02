/* eslint-disable react/prop-types */
import {createContext, useContext, useEffect, useState} from "react";
import i18n from "i18next";
import cookies from "js-cookie";
import {useTranslation} from "react-i18next";

export const useContextAPi = () => {
  return useContext(ContextApi);
};
export const ContextApi = createContext();

const ContextApiProvider = ({children}) => {
  const {t} = useTranslation();

  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const [language, setLanguage] = useState(cookies.get("i18next") || "en");
  document.documentElement.dir = i18n.dir(language);
  useEffect(() => {
    window.document.dir = i18n.dir(language);
    document.documentElement.dir = i18n.dir(language);
  }, [language]);
  const changeLangToArbic = () => {
    i18n.changeLanguage("ar");
    cookies.set("i18next", "ar");
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "ar";
    setLanguage("ar");
  };
  const changeLangToEnglish = () => {
    i18n.changeLanguage("en");
    cookies.set("i18next", "en");
    document.documentElement.dir = "ltr";
    document.documentElement.lang = "en";
    setLanguage("en");
  };
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
    <ContextApi.Provider
      value={{
        open,
        setOpen,
        theme,
        toggleTheme,
        changeLangToArbic,
        changeLangToEnglish,
        language,
        t,
      }}
    >
      {children}
    </ContextApi.Provider>
  );
};

export default ContextApiProvider;
