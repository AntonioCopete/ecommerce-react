import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = { user: { token: "", username: "" } };

function reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: { ...state.user, token: action.payload.token, username: action.payload.username },
      };

    case "LOGOUT":
      return { ...state, token: "", username: "" };
    default:
      return state;
  }
}

function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const AuthStates = {
    ...state,
    login: (data) => dispatch({ type: "LOGIN", payload: data }),
    logout: () => dispatch({ type: "LOGOUT" }),
  };

  return <AuthContext.Provider value={AuthStates}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthContextProvider, useAuth };
