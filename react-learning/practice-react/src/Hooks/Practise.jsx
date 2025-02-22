/*useState is a Hook that allows you to have state variables in functional components. You pass the initial
If you’re managing complex state (like an object), you need to manually update parts of it using the spread operator (...)*/

function Practise(){
    const[user,setUser] = useState({name:"Dexter",age:25});

    const updateAge  = ()=>{
        setUser({...user,age: user.age + 1});
    }


    return(

        <div>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <button onClick={updateAge} >Incraese Age</button>
        </div>
    )
}

export default Practise;