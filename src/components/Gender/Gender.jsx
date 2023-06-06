import s from './Gender.module.css'

const Gender = ({ onChange, value }) => {
  const handleChange = (e) => {
    onChange({ value: e.target.value, name: e.target.name })
  }

  return (
    <div>
      <h2>Пол</h2>
      <div className={s.radioBlock}>
        <div className={s.radioBlockElement}>
          <input
            name="gender"
            type="radio"
            value="male"
            checked={value === 'male'}
            onChange={handleChange}
            id="option1"
          />
          <label htmlFor="option1">Мужчина</label>
        </div>
        <div className={s.radioBlockElement}>
          <input
            name="gender"
            type="radio"
            value="female"
            onChange={handleChange}
            checked={value === 'female'}
            id="option2"
          />
          <label htmlFor="option2">Женщина</label>
        </div>
      </div>
    </div>
  )
}
export default Gender
