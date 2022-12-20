import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../auth"

export const PublicRoute = ({ children }) => {

    const { logged } = useContext(AuthContext)
    return (logged) ? <Navigate to="/marvel" /> : children
}
