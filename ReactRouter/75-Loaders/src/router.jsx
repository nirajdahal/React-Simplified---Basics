import { createBrowserRouter, Navigate, Outlet, redirect, useNavigation } from "react-router-dom";
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
                loader: ({ request: { signal } }) => {
                    return fetch("https://jsonplaceholder.typicode.com/users", { signal })
                }
                , children: [,
                    { index: true, element: <Team /> },
                    {
                        path: ':memberId', loader: ({ params, request: { signal } }) => {
                            return fetch(`https://jsonplaceholder.typicode.com/users/${params.memberId}`, { signal }).then(res => {
                                if (res.status === 200) return res.json()
                                console.log(res)
                                throw redirect('/team')
                            })
                        }, element: <TeamMember />
                    },
                    { path: 'new', element: <NewTeamMember /> },
                ]
            }
        ]
    }
])
function Navlayout() {
    const { state } = useNavigation()
    return <>
        <Navbar />
        {state === 'loading' ? <h1>Loading</h1> : <Outlet />}
    </>
}
function TeamNavLayout() {
    return <>
        <TeamNav />
        <Outlet context={"I am sending you this message from context now"} />
    </>
}