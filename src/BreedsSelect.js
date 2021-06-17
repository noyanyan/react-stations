// DO NOT DELETE
import React from 'react'
import PropTypes from 'prop-types'
// eslint-disable-next-line react/prop-types
const BreedsSelect = ({ breeds = [], selectedBreed, handleSelectChange }) => {
  const breedItem =
    breeds.length &&
    breeds.map(breed => (
      <option key={breed} value={breed}>
        {breed}
      </option>
    ))
  return (
    <select value={selectedBreed} onChange={handleSelectChange}>
      {breedItem}
    </select>
  )
}
BreedsSelect.prototype = {
  breeds: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default BreedsSelect
