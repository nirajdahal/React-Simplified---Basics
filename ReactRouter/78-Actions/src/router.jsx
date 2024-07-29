import { createBrowserRouter, redirect } from "react-router-dom";
import NewTodo from "./pages/NewTodo";
import TodoList from "./pages/Todos";
export const router = createBrowserRouter([
    {
        index: true,
        element: <TodoList />,
        loader: async ({ request: { signal, url } }) => {
            const searchParams = new URL(url).searchParams
            const query = searchParams.get("query") || ""
            console.log(query)
            return { searchParams: { query }, todos: await fetch(`http://127.0.0.1:3000/todos?q=${query}`, { signal }).then(res => res.json()) }
        }
    },
    {
        path: '/new',
        element: <NewTodo />,
        action: async ({ request }) => {
            const formData = await request.formData()
            const title = formData.get('title')
            if (title === '') {
                return 'Todo Title is required'
            }
            fetch(`http://127.0.0.1:3000/todos`, {
                signal: request.signal,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, completed: false })
            }).then(res => res.json)
            return redirect('/')
        }
    }
])
