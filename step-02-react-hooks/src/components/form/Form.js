import React, {useState} from 'react';

const Form = ({setTodoTasks, todoTasks}) => {

    const [ inputText, setInputText ] = useState("");

    const addTask = (e) => {
        e.preventDefault();
        setTodoTasks([...todoTasks, inputText])
    }

    const updateInput = e => {
        setInputText(e.target.value)
    }
  return (
    <form onSubmit={addTask}>
      <input type="text" onChange={updateInput} placeholder='Enter your task' />
      <input type="submit" value={"Add Task"} />
    </form>
  )
}

export default Form;
