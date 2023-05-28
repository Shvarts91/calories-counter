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
    <div>
      <h2>Физическая активность</h2>
      <div>
        {initialStateActivities.map((element) => {
          return (
            <div key={element.id}>
              <input
                type="radio"
                name="activity"
                id={element.id}
                value={element.value}
                checked={value === element.value}
                onChange={handleChange}
              />
              <label htmlFor={element.id}>
                {element.physicalActivity}
                <span>{element.description}</span>
              </label>
            </div>
          )
        })}
      </div>

      {/* <input
        type="radio"
        name="activity"
        id="activity-minimal"
        value="minimal"
        checked={value === 'minimal'}
        onChange={handleChange}
      />
      <label htmlFor="activity-minimal">
        Минимальная
        <span>Сидячая работа и нет физических нагрузок</span>
      </label>
      <input
        type="radio"
        name="activity"
        id="activity-low"
        value="low"
        checked={value === 'low'}
        onChange={handleChange}
      />
      <label htmlFor="activity-low">
        Низкая
        <span>Редкие, не регулярные тренировки, активность в быту</span>
      </label>
      <input
        type="radio"
        name="activity"
        id="activity-medium"
        value="medium"
        checked={value === 'medium'}
        onChange={handleChange}
      />
      <label htmlFor="activity-medium">
        Средняя
        <span>Тренировки 3-5 раз в неделю</span>
      </label>
      <input
        type="radio"
        name="activity"
        id="activity-high"
        value="high"
        checked={value === 'high'}
        onChange={handleChange}
      />
      <label htmlFor="activity-high">
        Высокая
        <span>Тренировки 6-7 раз в неделю</span>
      </label>
      <input
        type="radio"
        name="activity"
        id="activity-veryHigh"
        value="veryHigh"
        checked={value === 'veryHigh'}
        onChange={handleChange}
      />
      <label htmlFor="activity-veryHigh">
        Очень высокая
        <span>Больше 6 тренировок в неделю и физическая работа</span>
      </label> */}
    </div>
  )
}

export default Activities
