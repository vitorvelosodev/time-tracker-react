import { useState } from 'react'
import './App.css'
import data from './assets/data.json'
import InfoTimer from './components/InfoTimer/InfoTimer'
import Profile from './components/Profile/Profile'

function App() {
  const timersData = data

  const [timespan, setTimespan] = useState('daily')

  const timerElements = timersData.map(timer =>
    <InfoTimer
      title={timer.title}
      current={timer.timeframes[timespan].current}
      previous={timer.timeframes[timespan].previous}
      svg={timer.svg}
      bgColor={timer.backgroundColor}
      timespan={timespan}
    />
  )

  return (
    <div className='page-container'>
    <Profile 
      firstName='Jeremy'
      lastName='Robson'
      profilePic='image-jeremy.png'
      timespan={timespan}
      setTimespan={setTimespan}
    />
    {timerElements}
  </div>
)}

export default App
