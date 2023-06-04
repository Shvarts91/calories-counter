import s from './Activity.module.css'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'

import Radio from '@mui/material/Radio'

function Activities({ value, onChange }) {
  const handleChange = (e) => {
    onChange({ value: e.target.value, name: e.target.name })
  }
  const initialStateActivities = [
    {
      id: 'activity-minimal',
      value: 'minimal',
      physicalActivity: 'Минимальная',
      description: 'Сидячая работа и нет физических нагрузок',
    },
    {
      id: 'activity-low',
      value: 'low',
      physicalActivity: 'Низкая',
      description: 'Редкие, не регулярные тренировки, активность в быту',
    },
    {
      id: 'activity-medium',
      value: 'medium',
      physicalActivity: 'Средняя',
      description: 'Тренировки 3-5 раз в неделю',
    },
    {
      id: 'activity-high',
      value: 'high',
      physicalActivity: 'Высокая',
      description: 'Тренировки 6-7 раз в неделю',
    },
    {
      id: 'activity-veryHigh',
      value: 'veryHigh',
      physicalActivity: 'Очень высокая',
      description: 'Больше 6 тренировок в неделю и физическая работа',
    },
  ]
  return (
    <FormControl>
      <h2 id="activity">Физическая активность</h2>

      <RadioGroup name="activity">
        {initialStateActivities.map((element) => {
          return (
            <div className={s.activityElement} key={element.id}>
              <FormControlLabel
                checked={value === element.value}
                onChange={handleChange}
                value={element.value}
                name="activity"
                id={element.id}
                control={<Radio />}
                label={element.physicalActivity}
              />
              <span className={s.activityElementSpan}>
                {element.description}
              </span>
            </div>
          )
        })}
      </RadioGroup>
    </FormControl>
  )
}

export default Activities
