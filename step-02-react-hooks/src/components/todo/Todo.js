import React from 'react'
import TodoItem from './TodoItem';

const Todo = ({todoTasks, setTodoTasks}) => {
  return (
    <>
        <h1>Todo Tasks</h1>
        <ul>
            {
                todoTasks.length !== 0 ?
                todoTasks.map((task, index) => <TodoItem key={`todo-task-${index}`} text={task} index={index} setTodoTasks={setTodoTasks} todoTasks={todoTasks}/>)
                :
                <p>No task has been added.</p>
            }
        </ul>
    </>
  )
}

export default Todo;