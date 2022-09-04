import React from 'react'

const TodoItem = ({text, index, todoTasks, setTodoTasks}) => {
    const deleteTask = () => {
        const filteredTasks = todoTasks.filter((curr, ind) => ind !== index);
        setTodoTasks(filteredTasks);
    }
  return (
    <li><p>{text}</p><button onClick={deleteTask}>x</button></li>
  )
}

export default TodoItem;