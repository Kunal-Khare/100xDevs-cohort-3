/*  onChange --> event handler used primarily form elements like <input>, <select>, <textarea> etc.
triggers a function every time the value of the input changes.

 */

import React, { useState } from "react";

function MyChange() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [comment, setComment] = useState(""); // this is for textarea
  const [payment, setPayment] = useState(""); // this is for select
  const [shipping, setShipping] = useState(""); // this is for radio button

  // this is we using input field to change the value of the state
  function handleChange(event) {
    setName(event.target.value);
  }

  function handleQuantity(event) {
    setQuantity(event.target.value);
  }

  function handleComment(event) {
    setComment(event.target.value); // textarea value is set here
  }

  function handlePayment(event) {
    setPayment(event.target.value);
  }

  function handleShipping(event) {
    setShipping(event.target.value);
  }

  return (
    <div>
      <input value={name} onChange={handleChange} />
      <p>Name: {name}</p>

      <input value={quantity} onChange={handleQuantity} type="number" />
      <p>Quantity: {quantity}</p>

      <textarea
        value={comment}
        onChange={handleComment}
        placeholder="Please enter your comment"
      />
      <p> comment: {comment}</p>

      <select value={payment} onChange={handlePayment}>
        <option value="">Select an option</option>
        <option value="Visa"> Visa </option>
        <option value="MasterCard">MasterCard</option>
        <option value="Paypal">Paypal</option>
        <option value="UPI">UPI</option>
      </select>
      <p>Payment Option: {payment}</p>

      <label>
        <input
          type="radio"
          value="cash on delivery"
          checked={shipping === "cash on delivery"}
          onChange={handleShipping}

        />
        Cash on delivery   
      </label>
      <br />

      <label>
        <input
          type="radio"
          value="Online payment"
          checked={shipping === "Online payment"}
          onChange={handleShipping}
        />
        Online payment
      </label>
      <br />

      <label>
        <input
          type="radio"
          value="Free delivery"
          checked={shipping === "Free delivery"}
          onChange={handleShipping}
        />
        Free delivery
      </label>

      <p>Shipping: {shipping}</p>
    </div>
  );
}

export default MyChange;
