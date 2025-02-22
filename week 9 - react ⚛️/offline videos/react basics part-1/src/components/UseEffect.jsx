import React, { useEffect, useState } from "react";

function UseEffect() {
  const [count, setCount] = useState(1);
  function increaseCount() {
    console.log("Increase count called" + count);
    setCount(count + 1);
  }

  useEffect(function(){
    console.log("above setinterval")
    setInterval(increaseCount,1000);
  },[])

  return <div>
    {count}
  </div>
}

export default UseEffect;
