import React from 'react'
import './style.css'
import TextField from './text-field'
import CheckBox from './checkbox'

function FormWrapper({inputs, onInputChange}) {
  return (
    <div className='form-wrapper'>
      {
        inputs.map((input, index)=>{
          if(input.type === 'checkbox'){
            return <CheckBox 
            onChange={onInputChange}
            index={index}
            key={input.id} {...input}/>
          }

          return <TextField 
          index={index}
          key={input.id} {...input}
          onChange={onInputChange}
          />
        })
      }
    </div>
  )
}

export default FormWrapper