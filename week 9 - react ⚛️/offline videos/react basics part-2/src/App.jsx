import React from "react";
import List_Keys from "./components/List_Keys";

const Card = ({ children }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "20px",
        margin: "10px",
        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      {children}
    </div>
  );
};

const App = () => {
  return (
    <>
      <div>
        <Card>
          <h2>Card Title</h2>
          <p>This is some content inside the card.</p>
        </Card>
        <Card>
          <h2>Another Card</h2>
          <textarea name="text" id=""></textarea>
          <p>This card has different content!</p>
        </Card>
      </div>

      <List_Keys/>

    </>
  );
};

export default App;
