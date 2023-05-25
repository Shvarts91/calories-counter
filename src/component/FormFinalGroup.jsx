import GenderN from './GenderN'
import React, { useState } from 'react'

const FormFinalGroup = () => {
  const [valueFields, setValueFields] = useState({ gender: '' })
  const onChange = ({ name, value }) => {
    setValueFields({ ...valueFields, [name]: value })
  }
  console.log(valueFields)
  return (
    <div>
      <GenderN onChange={onChange} value={valueFields.gender} />
    </div>
  )
}

export default FormFinalGroup
