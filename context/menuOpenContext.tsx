import React, { useState, createContext, ReactNode } from "react";

interface MenuOpenContextProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

export const MenuOpenContext = createContext<MenuOpenContextProps | null>(null);

interface MenuOpenProviderProps {
  children: ReactNode;
}

export const MenuOpenProvider = ({ children }: MenuOpenProviderProps) => {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return <MenuOpenContext.Provider value={{ menuOpen, toggleMenu }}>{children}</MenuOpenContext.Provider>;
};
