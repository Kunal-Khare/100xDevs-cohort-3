/*  onChange --> event handler used primarily form elements like <input>, <select>, <textarea> etc.
triggers a function every time the value of the input changes.

 */

import React, { useState } from "react";

function MyChange() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [comment, setComment] = useState(""); // this is for textarea

// this is we using input field to change the value of the state
  function handleChange(event) {
    setName(event.target.value);
  }

  function handleQuantity(event){
    setQuantity(event.target.value);
  }

  function handleComment(event){
    setComment(event.target.value); // textarea value is set here 
  }

  return (
    <div>
      <input value={name} onChange={handleChange} />
      <p>Name: {name}</p>

      <input value={quantity} onChange={handleQuantity} type="number"/>
      <p>Quantity: {quantity}</p>

      <textarea value={comment} onChange={handleComment} placeholder="Please enter your comment" />
    <p> comment: {comment}</p>
    </div>
  );
}

export default MyChange;
