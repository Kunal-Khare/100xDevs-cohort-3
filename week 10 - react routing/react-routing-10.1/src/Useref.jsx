import React, { useRef, useState } from "react";

function Useref() {
  const inputRef = useRef();

  function focusonInput() {
    inputRef.current.focus();
    inputRef.current.style.color = "red";
  }
  return (
    <div>
      Sign up
      <input ref={inputRef} type="text" />
      <input type="text" placeholder="Email" />
      <button onclick={focusonInput}>submit</button>
    </div>
  );
}

export default Useref;
