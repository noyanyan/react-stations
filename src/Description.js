// DO NOT DELETE
import React from 'react'
import PropTypes from 'prop-types'
import DogImg from './DogImage'
const Description = ({ dogName, dogUrl, handleClick }) => {
  return (
    <>
      <div className="mx-20 py-4">
        <p className="text-2xl bold flex justify-center flex-wrap">
          This is a {dogName} image gallery!
        </p>
        <DogImg url={dogUrl} />
        <button
          type="button flex justify-center"
          onClick={handleClick}
          className=" border-4 rounded shadow-md mt-8 p-2 mx-auto hover:bg-indigo-300 w-20"
          style={{ display: 'block' }}
        >
          更新
        </button>
      </div>
      <div className="flex justify-center mt-32 text-xl">←かわいい</div>
    </>
  )
}

Description.prototype = {
  dogName: PropTypes.string,
  dogUrl: PropTypes.string,
  handleClick: PropTypes.func,
}

export default Description
