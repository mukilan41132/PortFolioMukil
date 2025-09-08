import React, { useState, type ReactNode } from "react";
import AppContext from "../AppContext";

type AppProviderProps = {
  children: ReactNode;
};

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [oldId, setOldId] = useState<null | number>(1);

  return (
    <AppContext.Provider value={{ oldId, setOldId }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
