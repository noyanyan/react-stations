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

  return (
    <div>
      <header>HOGE APP</header>
      <main>
        <p>this is a dog image gallery</p>
        <img src={dogUrl} alt="dog_image" />
        <button
          type="button"
          onClick={() =>
            setDogUrl(
              'https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg',
            )
          }
        >
          更新
        </button>
      </main>
    </div>
  )
}
