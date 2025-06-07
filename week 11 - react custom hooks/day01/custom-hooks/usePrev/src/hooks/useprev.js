import React, { useRef, useEffect } from "react";

function useprev(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value; // update ref to latest value 
  }, [value]); // only re-run if value changes

  return ref.current; // return previous value (happens before update in useEffect above)
}

export default useprev;
