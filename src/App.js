// DO NOT DELETE

import React from 'react'
import './App.css'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = React.useState(
    'https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_340.jpg',
  )

  const getUrl = async () => {
    const data = await fetch('https://dog.ceo/api/breeds/image/random')
    return data.json()
  }
  const handleClick = async () => {
    const newUrl = await getUrl()
    setDogUrl(newUrl.message)
  }

  return (
    <div>
      <header>HOGE APP</header>
      <main>
        <p>this is a dog image gallery</p>
        <img src={dogUrl} alt="dog_image" />
        <button type="button" onClick={handleClick}>
          更新
        </button>
      </main>
    </div>
  )
}
