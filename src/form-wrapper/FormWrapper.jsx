import React from 'react'
import './style.css'
import TextField from './text-field'
import CheckBox from './checkbox'

function FormWrapper({inputs, onInputChange, onCancel, onSubmit, disableSubmitBtn, onBlur}) {

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
            onBlur={onBlur}
            index={index}
            key={input.id} 
            {...input}/>
          }

          return <TextField 
          index={index}
          key={input.id} 
          {...input}
          onBlur={onBlur}
          onChange={onInputChange}
          />
        })
      }

      <div>
        <button onClick={onCancel}>cancel</button>
        <button disabled={disableSubmitBtn} type='submit'>submit</button>
      </div>
    </form>
  )
}

export default FormWrapper