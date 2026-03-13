import React from 'react'
import './style.css'

function CheckBox({...input}) {
  const {
    label='',
    id='',
    value='',
    name='',
    error='',
    disabled=false,
    readonly=false,
    checked,
  } = input;


  return (
    <div>
      <input 
      id={id}
      disabled={disabled}
      readOnly={readonly}
      name={name}
      value={value}
      type="checkbox"/>
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default CheckBox