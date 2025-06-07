import React, {useState, useEffect} from 'react'
import usePrevious from './hooks/useprev'

const App = () => {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  useEffect( () => {
    if (prevCount < count) {
      console.log(`Count is now ${count} before it was ${prevCount}`);
    }
  },[count, prevCount]);


  return (
    <div>

      <p> now :{count}, before : {prevCount} </p>
      <button onClick={() => setCount(count + 1)}>+</button>

    </div>
  )
}

export default App