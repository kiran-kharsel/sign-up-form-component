import React from 'react'
import './style.css'
import TextField from './text-field'
import CheckBox from './checkbox'

function FormWrapper({inputs, onInputChange, onCancel, onSubmit}) {

  function handleSubmit(e){
    e.preventDefault();
    onSubmit()
  };


  
  return (
    <form onSubmit={handleSubmit}
    className='form-wrapper'>
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

      <div>
        <button onClick={onCancel}>cancel</button>
        <button type='submit'>submit</button>
      </div>
    </form>
  )
}

export default FormWrapper