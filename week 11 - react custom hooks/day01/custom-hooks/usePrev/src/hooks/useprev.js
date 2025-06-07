import React, {useRef, useEffect} from 'react'

function useprev(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  
  },[value] )

  return ref.current;
}

export default useprev