import './App.css';
import Form from './components/form/Form';
import Todo from './components/todo/Todo';
import {useState} from 'react';

function App() {
  const [todoTasks, setTodoTasks] = useState([]);

  return (
    <>
      <h1>Todo App</h1>
      <Form todoTasks={todoTasks} setTodoTasks={setTodoTasks}/>
      <Todo todoTasks={todoTasks} setTodoTasks={setTodoTasks}/>
    </>
  );
}

export default App;
