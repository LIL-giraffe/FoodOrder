import React, { useState } from 'react'
import '../App.css'

const Lists = () => {
    const [todo, setTodo] = useState([])
    const [input, setInput] = useState("")


    //Input todos
    const AddTodo = () => {
        setTodo([...todo, {
            task:input,
            id:Date.now().toString(),
            isCompleted:false
        }])
        setInput("")
    }

    //Deleting Todos
    const Delete = (slectedVal) => {
        let newTodo = todo.filter((todo) => todo.id !== slectedVal)
        setTodo(newTodo)
    }

    return (
        <>
            <div className='container'>

                <input className='int' type='text' onChange={(e) => setInput(e.target.value)} value={input} placeholder='Work todo' />
                <button onClick={AddTodo} className='btn'>Add ToDo</button>

                {
                    todo.length > 0 ?
                        todo.map((todo,index) => (
                            <div className='contain' key={index}>
                                <input type='checkbox' />
                                <p style={{margin:'10px'}}>{todo.task}</p>
                                <button onClick={() => Delete(todo.id)}>Delete</button>
                            </div>
                        )) : <p>no task</p>

                }
            </div>
            <button style={{margin:"10px", padding:'10px'}}>Completed</button>
            <button style={{padding:'10px'}}>Incomplete</button>
        </>
    )
}

export default Lists