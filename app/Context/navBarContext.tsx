"use client"

import {
  Dispatch,
  FC,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";

interface NavBarContextTypes {
  isHidden: boolean;
  setIsHidden: Dispatch<React.SetStateAction<boolean>>;
  currentPage: string;
  setCurrentPage: Dispatch<React.SetStateAction<string>>;
}

interface NavBarContextProviderProps {
  children: ReactNode;
}

const NavBarContext = createContext<NavBarContextTypes>({
  isHidden: false,
  setIsHidden: (): void => {},
  currentPage: "Dashboard",
  setCurrentPage: (): void => {},
});

export const NavBarContextProvider: FC<NavBarContextProviderProps> = ({
  children,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  const [currentPage, setCurrentPage] = useState("");

  return (
    <NavBarContext.Provider
      value={{ isHidden, setIsHidden, currentPage, setCurrentPage }}
    >
      {children}
    </NavBarContext.Provider>
  );
};

export const useNavBarContext = () => useContext(NavBarContext);
