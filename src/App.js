// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  return (
    <div>
      <header>HOGE APP</header>
      <main>
        <p>this is a dog image gallery</p>
        <img
          src="https://images.dog.ceo/breeds/hound-basset/n02088238_5441.jpg"
          alt="dog_image"
        />
      </main>
    </div>
  )
}
