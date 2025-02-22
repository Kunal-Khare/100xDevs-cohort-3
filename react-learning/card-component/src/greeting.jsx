import react from 'react';

function Greeting(props){
    return(
        <div className='greeting'>
            <h1> Hello, {props.name}</h1>
            <p>Age : {props.age}</p>
            <p>Occupation : {props.occupation}</p>
        </div>
    )
}

export default Greeting;