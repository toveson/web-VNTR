"use client"

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ReactNode, FC, useContext, createContext } from "react";
const theme = createTheme({
  palette: {
    primary: {
      main: "#4E8448",
    },
  },
});

interface ThemeProviderProps {
  children: ReactNode;
}

const NavBarContext = createContext({

});

export const ThemeContextProvider: FC<ThemeProviderProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export const useThemeContext = () => useContext(NavBarContext);
