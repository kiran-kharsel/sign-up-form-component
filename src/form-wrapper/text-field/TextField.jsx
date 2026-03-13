import React from 'react'
import './style.css'

function TextField({...input}) {
  const {
    label='',
    placeholder='',
    id='',
    value='',
    name='',
    error='',
    disabled=false,
    readonly=false,
  } = input;


  return (
    <div>
      <label htmlFor="">{label}</label>
      <input 
      id={id}
      disabled={disabled}
      readOnly={readonly}
      name={name}
      value={value}
      type="text" placeholder={placeholder}/>
    </div>
  )
}

export default TextField