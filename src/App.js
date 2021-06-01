// DO NOT DELETE
import React from 'react'
import './App.css'
import 'tailwindcss/tailwind.css'
import Header from './Header'
import Footer from './Footer'
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
          <div className="mx-20 py-4">
            <p className="text-2xl bold flex justify-center flex-wrap">
              This is a {dogName} image gallery!
            </p>
            <img
              className="rounded-xl mt-10 flex justify-center bg-gray-600 p-1"
              style={{ width: 400 }}
              src={dogUrl}
              alt="dog_image"
            />
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
        </div>
      </main>

      <Footer />
    </div>
  )
}
