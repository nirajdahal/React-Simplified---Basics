import { createBrowserRouter } from "react-router-dom";
import About from './pages/About';
import Home from "./pages/Home";
import Store from './pages/Store';
export const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/store', element: <Store /> },
    { path: '/about', element: <About /> },
])