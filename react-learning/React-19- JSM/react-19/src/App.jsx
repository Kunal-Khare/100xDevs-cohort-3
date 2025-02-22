import React, {useState, useEffect} from 'react'

const Card = ({title}) =>{
  const [hasLiked, setHasLiked] = useState(false);

  return (
    <div className='card'>
      <h2>
        {title}
      </h2>

      <button onClick={() => setHasLiked(!hasLiked)}> 
        {hasLiked ? '❤️' : '🤍'}
      </button>
    </div>
  )
}

function App() {
  return (
    <div className='card-container'>
      <Card title ="American Psycho"/>
      <Card title="Seven"/>
      <Card title ="Whiplash"/>
    </div>
  )
}

export default App

