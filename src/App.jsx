import { useState } from 'react'
import Profile from '../components/profile/Profile'
import './App.css'
import data from './assets/data.json'

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
