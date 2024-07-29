import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import About from './pages/About';
import Home from "./pages/Home";
import NewTeamMember from "./pages/NewTeamMember";
import Store from './pages/Store';
import Team from './pages/Team';
import TeamMember from "./pages/TeamMember";
import TeamNav from "./TeamNav";
export const router = createBrowserRouter([
    {
        element: <Navlayout />,
        errorElement: <h1>Error</h1>,
        children: [
            // { path: '*', element: <h1>404</h1> },
            { path: '*', element: <Navigate to='/' /> },
            { path: '/', element: <Home /> },
            { path: '/test/*', element: <h1>Testing</h1> },
            { path: '/store', element: <Store /> },
            { path: '/about', element: <About /> },
            {
                path: '/team', element: <TeamNavLayout />,
                children: [
                    { index: true, element: <Team /> },
                    { path: ':memberId', element: <TeamMember /> },
                    { path: 'new', element: <NewTeamMember /> },
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