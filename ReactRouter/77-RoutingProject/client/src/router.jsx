import { createBrowserRouter, Navigate, useRouteError } from "react-router-dom";
import { RootLayout } from "./layout/RootLayout";
import { postRoute } from "./pages/Post";
import { postListRoute } from "./pages/Posts";
import { todoListRoute } from './pages/Todos';
import { userRoute } from "./pages/User";
import { userListRoute } from './pages/Users';
export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [
                    { index: true, element: <Navigate to="/users" /> },
                    {
                        path: "posts",
                        children: [
                            {
                                index: true,
                                ...postListRoute,
                            },
                            { path: ":postId", ...postRoute },
                        ],
                    },
                    {
                        path: "users",
                        children: [
                            { index: true, ...userListRoute },
                            { path: ":userId", ...userRoute },
                        ],
                    },
                    { path: "todos", ...todoListRoute },
                    { path: "*", element: <h1>404 - Page Not Found</h1> },
                ],
            },
        ],
    },
])
function ErrorPage() {
    const error = useRouteError()
    return (
        <>
            <h1>Error - Something went wrong</h1>
            {import.meta.env.MODE !== "production" && (
                <>
                    <pre>{error.message}</pre>
                    <pre>{error.stack}</pre>
                </>
            )}
        </>
    )
}
