import React from 'react'
import './style.css'

function TextField({onChange, onBlur,...input}) {
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
    required,
  } = input;

  function handleChange(e){
    onChange({id, index, value: e.target.value, type})
  }

  function handleBlur(e){
    onBlur({id, index, value: e.target.value, type})
  }


  return (
    <div>
      <label htmlFor={id}>
        {label}
        {required && <sup>*</sup>}
      </label>
      <input 
      id={id}
      disabled={disabled}
      readOnly={readonly}
      name={name}
      value={value}
      type="text" placeholder={placeholder}
      onChange={handleChange}
      onBlur={handleBlur}
      />
      {!!error && <div style={{color: 'red'}}>{error}</div>}
    </div>
  )
}

export default TextField