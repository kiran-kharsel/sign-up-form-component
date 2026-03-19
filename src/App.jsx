import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import FormWrapper from './form-wrapper'

// config data
const Inputs = [
  {
    type: 'text',
    label: 'first name',
    placeholder: 'enter first name',
    value: '',
    id: 'first_name',
    name: 'first_name',
    error: '',
    disabled: false,
    readonly: false,
    required: true,
  },
  {
    type: 'text',
    label: 'last name',
    placeholder: 'enter last name',
    value: '',
    id: 'last_name',
    name: 'last_name',
    error: '',
    disabled: false,
    readonly: false,
    required: true,
  },
  {
    type: 'email',
    label: 'email',
    placeholder: 'enter email',
    value: '',
    id: 'email',
    name: 'email',
    error: '',
    disabled: false,
    readonly: false,
    required: true,
  },
  {
    type: 'number',
    label: 'phone number',
    placeholder: 'enter phone number',
    value: '',
    id: 'phone_number',
    name: 'phone_number',
    error: '',
    disabled: false,
    readonly: false,
    required: true,
  },
  {
    type: 'checkbox',
    label: 'accept terms and conditions',
    value: 'accept_terms',
    id: 'accept_terms',
    name: 'accept_terms',
    error: '',
    disabled: false,
    readonly: false,
    required: true,
  },
]

function App() {
  const [inputs, setInputs] = useState(structuredClone(Inputs))

  function onInputChange({id, index, value, checked, type}){
    const oldState = structuredClone(inputs)

    if(type === 'checkbox'){
      oldState[index].checked = checked
    } else{
      oldState[index].value = value
    }

    setInputs(oldState)
  };

  function handleOnCancel(){
    setInputs(structuredClone(inputs))
  }

  function handleOnSubmit(){
    let params = {};

    inputs.forEach((input) => {
      if(input.type === 'checkbox'){
        if(input.checked){
          params[input.name] = input.value
        }else{
          return
        }
      }else{
        if(input.value){
          params[input.name] = input.value
        }else{
          return;
        }
      }
    })

    console.log(params)
  }


  function disableSubmit(inputs){
    let disable = false;

    for(let input of inputs){
      if(input.required && !input.value){
        disable = true;
        break
      };
    }

    return disable;
  }

  const disableSubmitBtn = disableSubmit(inputs)

  return (
    <>
     <FormWrapper 
     inputs={inputs}
     onInputChange={onInputChange}
     onCancel={handleOnCancel}
     onSubmit={handleOnSubmit}
     disableSubmitBtn={disableSubmitBtn}
     />
    </>
  )
}

export default App
