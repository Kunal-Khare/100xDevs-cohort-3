
import { useState } from "react";

export  default function Text(){
    const [text, setText] =  useState('hola amigo')


    function handleChange(e) {
        setText(e.target.value);

    }


    return
(
    <>
    <input type="text" value = {text} onChange={handleChange} />

    <p> you typed this shit: </p>

    <button onClick={() => setText('hello')}>
        reset
    </button>
    
    </>
)}