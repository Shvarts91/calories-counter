import Gender from './Gender/Gender'
import React, { useState } from 'react'
import DataBody from './DataBody/DataBody'
import Activity from './Activity/Activity'

const FormFinalGroup = () => {
  const initialValue = {
    gender: 'male',
    age: '',
    growth: '',
    weight: '',
    activity: 'minimal',
    resultCalories: '',
  }
  const [valueFields, setValueFields] = useState(initialValue)
  const onChange = ({ name, value }) => {
    setValueFields({ ...valueFields, [name]: value })
  }

  const clearValueForm = (e) => {
    e.preventDefault()
    setValueFields(initialValue)
  }

  const activities = {
    minimal: 1.2,
    low: 1.375,
    medium: 1.55,
    high: 1.725,
    veryHigh: 1.9,
  }

  const calculationCalories = ({ gender, activity }) => {
    let sum =
      10 * valueFields.weight + 6.25 * valueFields.growth - 5 * valueFields.age
    if (gender === 'male') sum = sum + 5
    if (gender === 'female') sum = sum - 161

    const coefficient = activities[activity]
    const result = sum * coefficient

    setValueFields({ ...valueFields, resultCalories: result })
  }

  const getResultСalculations = (e) => {
    e.preventDefault()
    calculationCalories(valueFields)
  }

  const getPercent = (value) => {
    const num = valueFields.resultCalories
    const tallage = 15
    const result = (num / 100) * tallage
    if (value === 'plus') {
      return num + result
    }
    if (value === 'minus') {
      return num - result
    }
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
      <Activity onChange={onChange} value={valueFields.activity} />
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
      {valueFields.resultCalories ? (
        <div className="resultBlock">
          <div>
            <h2>{valueFields.resultCalories}</h2>
            <p>Ваша норма</p>
          </div>
          <div>
            <h2>{getPercent('minus')}</h2>
            <p>Снижение веса</p>
          </div>
          <div>
            <h2>{getPercent('plus')}</h2>
            <p>Набор веса</p>
          </div>
        </div>
      ) : (
        ''
      )}
    </form>
  )
}

export default FormFinalGroup