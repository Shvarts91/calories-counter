import s from './DataBody.module.css'
import TextField from '@mui/material/TextField'

function DataBody({ inputName, titleName, value, onChange, text, nameClass }) {
  const cssClass = nameClass
  const handleChange = (e) => {
    onChange({ value: e.target.value, name: e.target.name })
  }

  const inputProps = {
    title: 'Please enter a positive integer (excluding zero)',
    pattern: '[1-9][0-9]*',
  }

  return (
    <div className={s[cssClass]}>
      <h2>
        {titleName} <span className={s.textDataBody}>{text}</span>
      </h2>

      <TextField
        name={inputName}
        id={inputName}
        min={0}
        variant="outlined"
        value={value}
        onChange={handleChange}
        placeholder={0}
        type="text"
        inputProps={inputProps}
      />
    </div>
  )
}

export default DataBody
