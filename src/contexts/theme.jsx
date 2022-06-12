import { createContext } from "react";

const defaultTheme = {
  theme: "",
  setTheme: () => {}
};

export const ThemeContext = createContext(defaultTheme);