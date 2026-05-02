import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer/reducer";

export const ContextGlobal = createContext();

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <ContextGlobal.Provider value={{ state, dispatch }}>
        {children}
      </ContextGlobal.Provider>
    </>
  );
};

export default ContextProvider;
