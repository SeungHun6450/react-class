import { createContext, useReducer } from "react";
import { userReducer } from "../reducers/userReducer";
import { userData } from "../constants/useData";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, userData);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}
