"use client";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ReactNode, FC, useContext, createContext } from "react";

//* Our color theme
//* Black: 000000
//* Fern Green: 4E8448
//* Seal Brown: 542F12
//* Sky Blue: 73C7E7
//* Linen: F8EBDE

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

const NavBarContext = createContext({});

export const ThemeContextProvider: FC<ThemeProviderProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export const useThemeContext = () => useContext(NavBarContext);
