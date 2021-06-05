// DO NOT DELETE
import { useEffect, useState } from 'react'

const DogListContainer = () => {
  const [dogList, setDogList] = useState(null)
  useEffect(() => {
    const handler = fetch('https://dog.ceo/api/breeds/list/all').then(val =>
      val.json(),
    )
    const val = handler()
    return setDogList(val)
  }, [])

  return { dogList }
}

export default DogListContainer
