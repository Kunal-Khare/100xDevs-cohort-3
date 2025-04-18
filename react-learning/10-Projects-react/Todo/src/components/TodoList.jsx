import React, {useState} from 'react'

function TodoList() {
    const [todos,  setTodos] = useState([]);
    const [inputText, setInputText] = useState('');
  return (
    <div>
        <h2>Todo List</h2>

    </div>
  )
}

export default TodoList