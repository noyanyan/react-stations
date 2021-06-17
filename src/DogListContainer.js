// DO NOT DELETE
import React, { useEffect, useState } from 'react'
import BreedsSelect from './BreedsSelect'
import DogImg from './DogImage'

const DogListContainer = () => {
  const [breedList, setBreedList] = useState([])
  const [dogImgs, setDogImgs] = useState([])
  const [selectedBreed, setSelectedBreed] = useState('african')

  const handleSelectChange = e => {
    setSelectedBreed(e.target.value)
  }
  useEffect(() => {
    const fetchAllBreeds = async () => {
      const response = await fetch('https://dog.ceo/api/breeds/list/all').then(
        r => r.json(),
      )
      setBreedList(Object.keys(response.message))
    }
    fetchAllBreeds()
  }, [])
  useEffect(() => {
    const fetcher = async breed => {
      const response = await fetch(
        `https://dog.ceo/api/breed/${breed}/images/random/12`,
      ).then(r => r.json())
      setDogImgs(response.message)
    }
    fetcher(selectedBreed)
  }, [selectedBreed])

  const res = dogImgs
    ? dogImgs.map(img => <DogImg key={img} url={img} />)
    : null

  return (
    <div>
      <BreedsSelect
        breeds={breedList}
        selectedBreed={selectedBreed}
        handleSelectChange={handleSelectChange}
      />
      {res}
    </div>
  )
}

export default DogListContainer
