// DO NOT DELETE
import React from 'react'
import './App.css'
import 'tailwindcss/tailwind.css'
import Header from './Header'
import Description from './Description'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  const [dogName, setDogName] = React.useState('')
  const [dogUrl, setDogUrl] = React.useState(
    'https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_340.jpg',
  )
  const [isFetching, setIsFetching] = React.useState(false)

  const getUrl = async () => {
    const data = await fetch('https://dog.ceo/api/breeds/image/random')
    return await data.json()
  }

  const updateDogStatus = url => {
    const arr = url.split('/')
    const name = arr[arr.length - 2]
    setDogUrl(url)
    setDogName(name)
  }
  const handleClick = async () => {
    if (isFetching) {
      return
    }
    setIsFetching(true)
    const value = await getUrl()
    setIsFetching(false)
    updateDogStatus(value.message)
    return
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-300 justify-between">
      <Header />
      <main className="w-9/12 mx-auto flex-1">
        <div className="bg-white py-4 mt-8 flex justify-items-center space-x-2 min-w-max">
          <Description
            dogName={dogName}
            handleClick={handleClick}
            dogUrl={dogUrl}
          />
        </div>
      </main>
    </div>
  )
}
