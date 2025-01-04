//child component
import React from "react";

function UserProfile({ name, age, hobbies }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age:{age}</p>
      <h4>Hobbies:</h4>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserProfile;