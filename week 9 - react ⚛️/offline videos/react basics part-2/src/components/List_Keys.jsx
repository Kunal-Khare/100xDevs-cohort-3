import React from "react";

function List_Keys() {
  return (
    <div>
      {[
        <Todo key={1} title={"sleep Well"} done={false} />,
        <Todo key={2} title={" code well"} done={true} />,
      ]}
    </div>
  );
}

function Todo({ title, done }) {
  return (
    <div>
      {title} - {done ? "done" : "not done"}
    </div>
  );
}

export default List_Keys;
