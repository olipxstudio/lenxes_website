import { useState, useEffect, createContext } from "react";
import { useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <AppContext.Provider
      value={{
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// useAppContext
export const useAppContext = () => useContext(AppContext);

export default AppContext;
