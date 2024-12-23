import React from "react";

function App() {
  let user = "Kunal Khare";

  const changeUser = () => {
    console.log(user);
    user = "Dexter";
    console.log(user);
  };
  return (
    <div>
      <h1> Username is {user}</h1>
      <button onClick={changeUser}> change user </button>
    </div>
  );
}

export default App;
