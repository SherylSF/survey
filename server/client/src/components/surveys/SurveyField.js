import React from 'react'

export default ({label, input, meta: {touched, error}}) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input}/>
            <div>
                {touched && error}
            </div>
        </div>
    )
}