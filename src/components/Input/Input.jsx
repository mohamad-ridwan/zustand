import React from 'react'
import './Input.scss'

const Input = ({label, name, inputChange, placeholder, value}) => {
    return (
        <>
            <label htmlFor="">{label}</label>
            <input type="text" name={name} onChange={inputChange} placeholder={placeholder} value={value}/>
        </>
    )
}

export default Input