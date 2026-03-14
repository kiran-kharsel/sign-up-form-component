import React from 'react'
import './style.css'

function CheckBox({onChange, ...input}) {
  let {
    type='',
    label='',
    id='',
    index='',
    value='',
    name='',
    error='',
    disabled=false,
    readonly=false,
    checked,
  } = input;

  function handleChange(){
    onChange({id, index, value, checked: !checked, type})
  }


  return (
    <div>
      <input 
      onChange={handleChange}
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