import React from 'react'
import { Form, Link, useActionData, useNavigation } from 'react-router-dom'
const NewTodo = () => {
    const errorMessage = useActionData()
    const { state } = useNavigation()
    const isSubmmiting = state === 'submitting' || state === 'loading'
    return (
        <>
            {isSubmmiting ? <h1>Submitting Data</h1> :
                <> <Form method='post'>
                    {errorMessage}
                    <input type='text' id='title' name='title' placeholder='Enter Todo' />
                    <button>Add Todo</button>
                </Form>
                    <br />
                    <br />
                    <Link to='..'>Back</Link>
                </>
            }
        </>
    )
}
export default NewTodo