// DO NOT DELETE
import React from 'react'
import PropTypes from 'prop-types'

const DogImg = ({ url }) => (
  <img
    className="rounded-xl mt-10 flex justify-center bg-gray-600 p-1"
    style={{ width: 400 }}
    src={url}
    alt="dog_image"
  />
)
DogImg.propTypes = {
  url: PropTypes.string,
}
export default DogImg
