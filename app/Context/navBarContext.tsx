"use client";

import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface NavBarContextTypes {
  isHidden: boolean;
  setIsHidden: Dispatch<SetStateAction<boolean>>;
  currentPage: string;
  setCurrentPage: Dispatch<SetStateAction<string>>;
}

interface NavBarContextProviderProps {
  children: ReactNode;
}

const NavBarContext = createContext<NavBarContextTypes>({
  isHidden: false,
  setIsHidden: (): void => {},
  currentPage: "",
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
