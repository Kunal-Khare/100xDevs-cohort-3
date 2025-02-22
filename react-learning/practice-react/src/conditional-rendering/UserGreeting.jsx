function UserGreeting(props) {
/*
  if (props.isLoggedIn) {
    return <h2> welcome {props.username}</h2>;
  }
  else{
    return <h2>Please Login to continue...</h2>
  }*/


// -----using ternary operator

return(props.isLoggedIn ? <h2 className="welcome-message">welcome{props.username}</h2> :
                          <h2 className="login-message">Please login...</h2> );

}

export default UserGreeting;
