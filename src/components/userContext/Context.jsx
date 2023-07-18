import { createContext, useEffect, useReducer } from "react";
import  AdminReducer from "./AdminReducer";

const INITIAL_STATE = {
    admin: JSON.parse(localStorage.getItem("admin")) || null,
    // isFetching: false,
    // error: false,
};

export const AdminContext = createContext(INITIAL_STATE);

export const AdminContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AdminReducer, INITIAL_STATE);
    useEffect (() => {
        localStorage.setItem("admin", JSON.stringify(state.admin))
    }, [state.admin])

    return (
        <AdminContext.Provider value={{ admin: state.admin, dispatch }}>
            {children}
        </AdminContext.Provider>
    )
}


// Path: e-commerce_client\src\components\userContext\AdminReducer.jsx