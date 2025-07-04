import React from 'react'

function Button({
    disabled,
    children,
    onClick,
    
}) {
  return (
    <span onClick={onClick} className={ ` rounded-3xl text-4xl px-32 py-8 text-white cursor-pointer ${disabled ? "bg-blue-200" : "bg-green-400"}`} >
        {children}
    </span>
  )
}

export default Button