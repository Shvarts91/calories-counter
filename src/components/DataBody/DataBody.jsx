function DataBody({ inputName, titleName, value, onChange }) {
  const handleChange = (e) => {
    onChange({ value: e.target.value, name: e.target.name })
  }

  return (
    <div>
      <label htmlFor={inputName}>
        <h2>{titleName}</h2>
      </label>
      <input
        name={inputName}
        min={0}
        // type="number"
        id={inputName}
        value={value}
        onChange={handleChange}
        placeholder={0}
        type="text"
        pattern="[1-9][0-9]*"
        title="Please enter a positive integer (excluding zero)"
      />
    </div>
  )
}

export default DataBody
