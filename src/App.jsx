import { useState } from 'react'
import './App.css'
import data from './assets/data.json'
import InfoTimer from './components/InfoTimer/InfoTimer'
import Profile from './components/Profile/Profile'

function App() {
  const [timersData, setTimersData] = useState(data);

  const timerElements = timersData.map(timer =>
    <InfoTimer
      title={timer.title}
      current={timer.timeframes.daily.current}
      previous={timer.timeframes.daily.previous}
      svg={timer.svg}
      bgColor={timer.backgroundColor}
    />
  )


  return (
    <>
      <Profile 
        firstName='Jeremy'
        lastName='Robson'
        profilePic='image-jeremy.png'
      />
      {timerElements}
    </>
  )
}

export default App
