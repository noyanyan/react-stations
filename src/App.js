// DO NOT DELETE

import React from 'react'
import './App.css'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = React.useState(
    'https://images.dog.ceo/breeds/hound-basset/n02088238_5441.jpg ',
  )

  const getUrl = async () => {
    const data = await fetch(
      'https://images.dog.ceo/breeds/dalmatian/cooper1.jpg',
    )
    console.log(data)
    return data.url
  }
  const handleClick = async () => {
    const newUrl = await getUrl()
    console.log(newUrl)
    setDogUrl(newUrl)
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
