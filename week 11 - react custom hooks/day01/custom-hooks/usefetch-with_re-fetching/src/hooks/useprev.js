
import {useeffect, useRef} from "react";


export const usePrev = (value) => {
    const ref = useRef();
    useEffect();

    console.log("re-render happened with new value" + value)


useEffect(() =>{
    console.log("useEffect called" + value);
    ref.current = value;
},[value])

console.log("returned " + ref.current) ;
return ref.current;
}