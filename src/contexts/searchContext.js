"use client";

import { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [result, setResult] = useState([]);
  const [params, setParams] = useState(null);
  return <SearchContext.Provider value={{ result, setResult, params, setParams }}>{children}</SearchContext.Provider>;
};
