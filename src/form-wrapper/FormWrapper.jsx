import React from 'react'
import './style.css'
import TextField from './text-field'
import CheckBox from './checkbox'

function FormWrapper({inputs}) {
  return (
    <div className='form-wrapper'>
      {
        inputs.map((input, index)=>{
          if(input.type === 'checkbox'){
            return <CheckBox key={input.id} {...input}/>
          }

          return <TextField key={input.id} {...input}/>
        })
      }
    </div>
  )
}

export default FormWrapper