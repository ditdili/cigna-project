import { useState, createContext, useContext } from 'react';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [list, setList] = useState([]);

  return (
    <StoreContext.Provider value={{ list, setList }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
