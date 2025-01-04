// parent component 
import React from "react";
import UserProfile from "./Profile";

function Profile() {
  const users = [
    { name: "Kunal", age: 22, hobbies: ["gym", "coding", "music"] },
    { name: "Vishal", age: 21, hobbies: ["mobile", "mutthi", "bkchdi"] },
    { name: "Dexter", age: 22, hobbies: ["hacking", "guitar", "travel"] },
  ];

  return (
    <div>
      <h1>Profile</h1>
      {users.map((user, index) => (
        //pass user details as props to userprofile
        <UserProfile
          key={index}
          name={user.name}
          age={user.age}
          hobbies={user.hobbies}
        />
      ))}
    </div>
  );
}

export default Profile;
