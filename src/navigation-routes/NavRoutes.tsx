import { useRoutes } from "react-router-dom";
import LoginScreen from "../pages/login/Login";
import DashBoardScreen from "../pages/dashboard/Dashboard";

export default function NavRoutes() {
    let routes = useRoutes([
        {
            path: '/',
            element: <LoginScreen />
        },
        {
            path: '/dashboard',
            element: <DashBoardScreen />
        }
    ])
    return routes
}
