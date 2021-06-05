// DO NOT DELETE
import React, { useState } from 'react'
import PropTypes from 'prop-types'
// eslint-disable-next-line react/prop-types
const BreedsSelect = ({ breeds }) => {
  const [value, setValue] = useState(breeds[0])
  const handleChange = e => {
    setValue(e.target.value)
  }
  console.log(breeds)

  return (
    <select value={value} onChange={handleChange}>
      {breeds.map(breed => (
        <option key={breed} selected={value === breed} value={breed}>
          {breed}
        </option>
      ))}
    </select>
  )
}
BreedsSelect.prototype = {
  breeds: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default BreedsSelect
