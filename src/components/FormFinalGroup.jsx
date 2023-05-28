import Gender from './Gender/Gender'
import React, { useState } from 'react'
import DataBody from './DataBody/DataBody'
import Activities from './Activities/Activities'

const TypesOfActivities = {
  minimal: 1.2,
  low: 1.375,
  medium: 1.55,
  high: 1.725,
  veryHigh: 1.9,
}

const FormFinalGroup = () => {
  const initialValueFields = {
    gender: 'male',
    age: '',
    growth: '',
    weight: '',
    activity: 'minimal',
  }

  const [resultCallories, setResultCallories] = useState(null)

  const [valueFields, setValueFields] = useState(initialValueFields)

  const onChange = ({ name, value }) => {
    setValueFields({ ...valueFields, [name]: value })
  }

  const clearValueForm = (e) => {
    e.preventDefault()
    setValueFields(initialValueFields)
  }

  const calculationCalories = ({ gender, activity, weight, growth, age }) => {
    let sum = 10 * weight + 6.25 * growth - 5 * age
    if (gender === 'male') sum = sum + 5
    if (gender === 'female') sum = sum - 161

    const coefficient = TypesOfActivities[activity]
    const result = sum * coefficient

    return { result, ...getPercent(result) }
  }

  const getResultСalculations = (e) => {
    e.preventDefault()
    setResultCallories(calculationCalories(valueFields))
  }

  const getPercent = (resultCallories) => {
    const tallage = 15
    const result = (resultCallories / 100) * tallage
    const gainWeigh = resultCallories + result
    const lossWidth = resultCallories - result

    return { gainWeigh, lossWidth }
  }

  return (
    <form onSubmit={getResultСalculations}>
      <Gender onChange={onChange} value={valueFields.gender} />
      <div>
        <DataBody
          titleName="Возраст"
          inputName="age"
          onChange={onChange}
          value={valueFields.age}
        />
        <DataBody
          titleName="Pocт"
          inputName="growth"
          onChange={onChange}
          value={valueFields.growth}
        />
        <DataBody
          titleName="Вес"
          inputName="weight"
          onChange={onChange}
          value={valueFields.weight}
        />
      </div>
      <Activities onChange={onChange} value={valueFields.activity} />
      <div>
        <button
          disabled={
            !+valueFields.age || !+valueFields.growth || !+valueFields.weight
          }
          type="submit"
        >
          Расчитать
        </button>
        <button
          disabled={
            !+valueFields.age && !+valueFields.growth && !+valueFields.weight
          }
          type="reset"
          onClick={clearValueForm}
        >
          Очистить поля и расчет
        </button>
      </div>
      {resultCallories && (
        <div className="resultBlock">
          <div>
            <h2>{resultCallories.result}</h2>
            <p>Ваша норма</p>
          </div>
          <div>
            <h2>{resultCallories.lossWidth}</h2>
            <p>Снижение веса</p>
          </div>
          <div>
            <h2>{resultCallories.gainWeigh}</h2>
            <p>Набор веса</p>
          </div>
        </div>
      )}
    </form>
  )
}

export default FormFinalGroup
