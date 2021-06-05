// DO NOT DELETE
import React, { useEffect, useState } from 'react'
import BreedsSelect from './BreedsSelect'
import DogImg from './DogImage'

const DogListContainer = () => {
  const [BreedList, setDogList] = useState(null)
  const [dogImgs, setDogImgs] = useState([])

  const handleBreedChange = async () => {
    const value = await fetch(
      'https://dog.ceo/api/breed/hound/images/random/12',
    ).then(val => val.json())
    setDogImgs(value.message)
  }
  useEffect(() => {
    const handler = async () => {
      const value = await fetch('https://dog.ceo/api/breeds/list/all').then(
        val => val.json(),
      )
      setDogList(Object.keys(value.message))
    }
    handler()
    handleBreedChange()
  }, [])
  const res = dogImgs
    ? dogImgs.map(img => <DogImg key={img} url={img} />)
    : null

  return (
    <div>
      {BreedList ? <BreedsSelect breeds={BreedList} /> : <p>now loading...</p>}
      {res}
    </div>
  )
}

export default DogListContainer
