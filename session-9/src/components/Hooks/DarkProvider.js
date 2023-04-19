import React, { createContext, useState } from "react";

export const DarkContext = createContext();

const DarkProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  // Handle Dark Button
  const handleDarkButton = () => {
    setIsDark(!isDark);
  };

  const darkInfo = { isDark, handleDarkButton };

  return (
    <DarkContext.Provider value={darkInfo}>{children}</DarkContext.Provider>
  );
};

export default DarkProvider;
