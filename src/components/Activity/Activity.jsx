import React from 'react'

function Activity({ value, onChange }) {
  const handleChange = (e) => {
    onChange({ value: e.target.value, name: e.target.name })
  }
  return (
    <div>
      <h2>Activity</h2>
      <input
        type="radio"
        name="activity"
        id="1"
        value="minimal"
        checked={value === 'minimal'}
        onChange={handleChange}
      />
      <label htmlFor="1">
        Минимальная
        <p>Сидячая работа и нет физических нагрузок</p>
      </label>
      <input
        type="radio"
        name="activity"
        id="2"
        value="low"
        checked={value === 'low'}
        onChange={handleChange}
      />
      <label htmlFor="2">
        Низкая
        <p>Редкие, не регулярные тренировки, активность в быту</p>
      </label>
      <input
        type="radio"
        name="activity"
        id="3"
        value="medium"
        checked={value === 'medium'}
        onChange={handleChange}
      />
      <label htmlFor="3">
        Средняя
        <p>Тренировки 3-5 раз в неделю</p>
      </label>
      <input
        type="radio"
        name="activity"
        id="4"
        value="high"
        checked={value === 'high'}
        onChange={handleChange}
      />
      <label htmlFor="4">
        Высокая
        <p>Тренировки 6-7 раз в неделю</p>
      </label>
      <input
        type="radio"
        name="activity"
        id="5"
        value="veryHigh"
        checked={value === 'veryHigh'}
        onChange={handleChange}
      />
      <label htmlFor="5">
        Очень высокая
        <p>Больше 6 тренировок в неделю и физическая работа</p>
      </label>
    </div>
  )
}

export default Activity
