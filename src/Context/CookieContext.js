import React, { useContext, useState } from "react";
const CookieContext = React.createContext();

export function useCookie() {
  return useContext(CookieContext);
}

export function CookieProvider({ initialCookie, children }) {
  const [isCookie, updateCookie] = useState(initialCookie);

  const setCookie = () => {
    updateCookie(true);
  };

  const deleteCookie = () => {
    updateCookie(false);
  };

  return (
    <CookieContext.Provider value={{ isCookie, setCookie, deleteCookie }}>
      {children}
    </CookieContext.Provider>
  );
}
