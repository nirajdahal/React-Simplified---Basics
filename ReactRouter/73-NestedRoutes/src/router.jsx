import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import About from './pages/About';
import Home from "./pages/Home";
import Store from './pages/Store';
import Team from './pages/Team';
import TeamMember from "./pages/TeamMember";
import TeamNav from "./TeamNav";
export const router = createBrowserRouter([
    {
        element: <Navlayout />,
        errorElement: <h1>Error</h1>,
        children: [
            { path: '/', element: <Home /> },
            { path: '/store', element: <Store /> },
            { path: '/about', element: <About /> },
            {
                path: '/team', element: <TeamNavLayout />, children: [,
                    { index: true, element: <Team /> },
                    { path: 'niraj', element: <TeamMember name="Niraj" /> },
                    { path: 'dahal', element: <TeamMember name="Dahal" /> },
                ]
            }
        ]
    }
])
function Navlayout() {
    return <>
        <Navbar />
        <Outlet />
    </>
}
function TeamNavLayout() {
    return <>
        <TeamNav />
        <Outlet context={"I am sending you this message from context now"} />
    </>
}