import { Navigate } from "react-router-dom"
import Auth from "../utils/Auth/Auth"

export const PrivateRoute = ({ children }) => {
    if (Auth.isLoggedIn()) {
        return children
    }
    return <Navigate to={"/login"} replace />
}