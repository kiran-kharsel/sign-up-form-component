import React from 'react'
import './style.css'

function TextField({onChange, ...input}) {
  let {
    type='',
    label='',
    placeholder='',
    id='',
    index='',
    value='',
    name='',
    error='',
    disabled=false,
    readonly=false,
  } = input;

  function handleChange(e){
    onChange({id, index, value: e.target.value, type})
  }


  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input 
      id={id}
      disabled={disabled}
      readOnly={readonly}
      name={name}
      value={value}
      type="text" placeholder={placeholder}
      onChange={handleChange}
      />
    </div>
  )
}

export default TextField