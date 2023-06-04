import Gender from './Gender/Gender'
import React, { useState } from 'react'
import DataBody from './DataBody/DataBody'
import Activities from './Activities/Activities'
import Button from '@mui/material/Button'
import CloseIcon from '@mui/icons-material/Close'

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
    setResultCallories(null)
  }

  const calculationCalories = ({ gender, activity, weight, growth, age }) => {
    let sum = 10 * weight + 6.25 * growth - 5 * age
    if (gender === 'male') sum = sum + 5
    if (gender === 'female') sum = sum - 161

    const coefficient = TypesOfActivities[activity]
    const result = Math.round(sum * coefficient)

    return { result, ...getPercent(result) }
  }

  const getResultСalculations = (e) => {
    e.preventDefault()
    setResultCallories(calculationCalories(valueFields))
  }

  const getPercent = (resultCallories) => {
    const tallage = 15
    const result = (resultCallories / 100) * tallage
    const gainWeigh = Math.round(resultCallories + result)
    const lossWidth = Math.round(resultCallories - result)

    return { gainWeigh, lossWidth }
  }

  return (
    <div>
      <h1>Счетчик каллорий</h1>
      <form onSubmit={getResultСalculations} className="finalForm">
        <Gender onChange={onChange} value={valueFields.gender} />
        <div className="dataBodyGroup">
          <DataBody
            titleName="Возраст"
            inputName="age"
            onChange={onChange}
            value={valueFields.age}
            text="лет"
            nameClass="age"
          />
          <DataBody
            titleName="Pocт"
            inputName="growth"
            onChange={onChange}
            value={valueFields.growth}
            text="см"
            nameClass="growth"
          />
          <DataBody
            titleName="Вес"
            inputName="weight"
            onChange={onChange}
            value={valueFields.weight}
            text="кг"
            nameClass="weight"
          />
        </div>
        <Activities onChange={onChange} value={valueFields.activity} />
        <div className="buttonBlock">
          <Button
            disabled={
              !+valueFields.age || !+valueFields.growth || !+valueFields.weight
            }
            type="submit"
            variant="contained"
            sx={{
              color: 'white',
            }}
          >
            Расчитать
          </Button>

          <Button
            disabled={
              !+valueFields.age && !+valueFields.growth && !+valueFields.weight
            }
            type="reset"
            onClick={clearValueForm}
            color="error"
            variant="text"
            startIcon={<CloseIcon />}
          >
            Очистить поля и расчет
          </Button>
        </div>
      </form>
      {resultCallories && (
        <div className="resultBlock">
          <h2>Ваша норма каллорий</h2>
          <div className="finalValueBlock">
            <div>
              <h3>{resultCallories.result + ' ккал'}</h3>
              <p>Поддержание веса</p>
            </div>
            <div>
              <h3>{resultCallories.lossWidth + ' ккал'}</h3>
              <p>Снижение веса</p>
            </div>
            <div>
              <h3>{resultCallories.gainWeigh + ' ккал'}</h3>
              <p>Набор веса</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default FormFinalGroup
