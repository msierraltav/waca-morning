"use client";
import React, { createContext, useContext, useState } from "react";
import locations from "@/app/lib/locations";

type AppContext = {
  country: string,
  setCountry: React.Dispatch<React.SetStateAction<string>>,
  countryList : string[],
};

const defaultAppContext : AppContext = {
  country: "MX",
  setCountry : () => {},
  countryList : [],
}

export const AppContext = createContext<AppContext>(defaultAppContext);

export function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [country, setCountry] = useState("MX");

  // low resources list :)
  //const countryList = ["CL", "ES", "MX"];

  const countryList :string[] = locations.map((country) => country.country_code);

  return (
    <AppContext.Provider
      value={{
        country,
        setCountry,
        countryList,
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
