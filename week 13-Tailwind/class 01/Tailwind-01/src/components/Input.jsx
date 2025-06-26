import react from 'react'

export const Input = ({
    onClick,
    type,
    placeholder

}) => {


    return (
        <span onClick={onClick} className={`rounded-3xl text-4xl px-32 py-8 text-white cursor-pointer bg-amber-400`} >
            <input type={type} placeholder={placeholder} className='bg-amber-500 outline-none '></input>
        </span>
    )
}