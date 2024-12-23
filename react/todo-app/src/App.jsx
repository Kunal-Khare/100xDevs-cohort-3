import React, {useState} from 'react'

export default function App() {
  //state to manage the list of tasks

  const [tasks, setTasks] = useState([]);
  const[input, setInput] =  useState('');

  // function to add a task
  const addTask = () =>{

    if (input.trim()!== ''){
      setTasks([...tasks,input]); // for adding a new task to the list
      setInput(''); // to clear the input 
    }
  };

  // function to remove a  task
  const removetask = (index) =>{

    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }




  return (
    <div style={{textAlign : 'center' , marginTop : '20px'}}>
      <h1>TO-DO List </h1>
      <div>
        <input type="text"
          placeholder='Enter a Task'
          value={input}
          onChange={(e) => setInput(e.target.value)} // updating the input state
           />
           <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task, index)=>(
          <li key={index} style={{marginTop: '10px'}}>
            {task}
            <button onClick={() => removetask(index)}>Remove</button>
          </li>
        ))}
      </ul>

    </div>
  )
}

 App;