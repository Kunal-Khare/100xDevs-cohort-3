import React, { useState } from 'react'
import Usefetch from './Usefetch';


//custom hooks
function useCounter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }
  return {
    count: count,
    increaseCount: increaseCount
  }
}



function App() {
  const { count, increaseCount } = useCounter();
  return (
    <div>
      <button onClick={increaseCount}>
        Increase {count}
      </button>

      <div>
        <Usefetch />
      </div>
    </div>
  )
}

export default App