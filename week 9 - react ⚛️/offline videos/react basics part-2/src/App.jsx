import React from "react";

function App() {

  return (
    <div>
      <Card innerContent={<div> Hi Hello </div>} />
      <Card innerContent={<div> Hi Dexter </div>} />
    </div>
  );
}

function Card({ innerContent }) {
  return (
    <div style={{background: "black", borderRadius: 10 ,color: "white", padding: 10, margin: 10}}>
      {innerContent}
    </div>
  );
}

export default App;
