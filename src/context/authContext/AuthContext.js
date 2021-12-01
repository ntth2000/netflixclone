import React, { useEffect, useReducer } from "react";
import { authReducer } from "./authReducer";
const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: null,
  error: null,
};

export const AuthContext = React.createContext(INITIAL_STATE);

export const AuthContextProvider = (props) => {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        status: state.status,
        error: state.error,
        dispatch,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
