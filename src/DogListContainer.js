// DO NOT DELETE
import React, { useEffect, useState } from 'react'
import BreedsSelect from './BreedsSelect'

const DogListContainer = () => {
  const [dogList, setDogList] = useState(null)

  useEffect(() => {
    const handler = async () => {
      const value = await fetch('https://dog.ceo/api/breeds/list/all').then(
        val => val.json(),
      )
      return setDogList(Object.keys(value.message))
    }
    handler()
  }, [])

  if (dogList) {
    for (let i = 0; i < dogList.length; i++) console.log(dogList[i])
  }
  return (
    <div>
      {dogList ? <BreedsSelect breeds={dogList} /> : <p>now loading...</p>}
    </div>
  )
}

export default DogListContainer
