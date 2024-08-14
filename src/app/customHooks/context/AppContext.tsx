"use client";
import React, { createContext, useContext, useState } from "react";

type AppContext = {
  country: string,
  setCountry: React.Dispatch<React.SetStateAction<string>>,
};

const defaultAppContext : AppContext = {
  country: "mexico",
  setCountry : () => {},
}

export const AppContext = createContext<AppContext>(defaultAppContext);

export function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [country, setCountry] = useState("mexico");

  return (
    <AppContext.Provider
      value={{
        country,
        setCountry,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext () : AppContext  {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }
  return context;
};
