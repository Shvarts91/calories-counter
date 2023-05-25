import React from 'react'

// import { Formik, Field, Form } from 'formik'

const GenderN = ({ onChange, value }) => {
  const handleChange = (e) => {
    onChange({ value: e.target.value, name: e.target.name })
  }

  return (
    <div>
      <h1>Пол</h1>

      <div className="radio">
        <label>
          <input
            name="gender"
            type="radio"
            value="option1"
            checked={value === 'option1'}
            onChange={handleChange}
          />
          Option 1
        </label>
      </div>
      <div className="radio">
        <label>
          <input
            name="gender"
            type="radio"
            value="option2"
            onChange={handleChange}
            checked={value === 'option2'}
          />
          Option 2
        </label>
      </div>

      {/* <Formik
      initialValues={{
        picked: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500))
        alert(JSON.stringify(values, null, 2))
      }}
    >
      {({ values }) => (
        <Form>
          <div id="my-radio-group">Picked</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label  >
              <Field type="radio" name="picked" value="One" />
              One
            </label>
            <label>
              <Field type="radio" name="picked" value="Two" />
              Two
            </label>
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik> */}
    </div>
  )
}
export default GenderN
