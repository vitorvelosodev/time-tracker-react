import { useState } from 'react'
import './App.css'
import data from './assets/data.json'
import Profile from './components/Profile/Profile'

function App() {
  return (
    <>
      <Profile 
        firstName='Jeremy'
        lastName='Robson'
        profilePic='image-jeremy.png'
      />
    </>
  )
}

export default App
