
/* click event -->  An interaction when a user clicks on a specific element.
                    we can respond to clicks by passing a callbacks to the onClick event handler.


*/


// its a simple button handler 
/*

function Button(){

    let count = 0;

    const hadnleClick = (name) => {

        if(count<3){
            count++;
            console.log(`${name} you clicked me ${count} times`);
            
        }
        else{
            console.log("You can't click more than 3 times");
        }

    }

    //const handleClick2 = (name) => console.log(`${name} stop clicking me`)

    return(
        <button onClick={() => hadnleClick("dexter")}>click me</button>
    );

}


*/

// now we are making a real click handler  with chnages states and all that jazz


function Button(){

    const handleClick = (e) => e.target.textContent = "clicked 👍"; // e -> event

    return (
        <button onClick={(e) => handleClick(e)}>Click me </button>
    )
}
export default Button;