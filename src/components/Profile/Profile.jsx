import './Profile.css'
import { useState } from 'react'
import Timespan from '../Timespan/Timespan';

export default function Profile(props) {
  const times = [
    {
      id: 1,
      text: 'Daily',
      selected: true
    },
    {
      id: 2,
      text: 'Weekly',
      selected: false
    },
    {
      id: 3,
      text: 'Monthly',
      selected: false
    }
  ];

  const [timespan, setTimespan] = useState(times);

  function toggleTimeSelection(id) {
    setTimespan(prevState => prevState.map(element => element.id === id ? {...element, selected: true} : {...element, selected: false}))
  }

  const timespanElements = timespan.map((time) => {
    return (
      <Timespan
          id={time.id}
          text={time.text}
          selected={time.selected}
          toggle={() => toggleTimeSelection(time.id)}
      />
    )
  })

  return (
    <div className='profile-container'>
      <section className='profile-area'>
        <img className='profile-photo' src={`./../../src/assets/images/${props.profilePic}`} alt="Profile picture" />
        <div className='profile-info'>
          <h4>Report for</h4>
          <h2>{props.firstName} {props.lastName}</h2>
        </div>
      </section>
      <section className='timespan-selection'>
        {timespanElements}
      </section>
    </div>
  )
}