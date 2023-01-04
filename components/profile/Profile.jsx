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
      text: 'Montly',
      selected: false
    }
  ];

  const [timespan, setTimespan] = useState(times.map(
    time => <h5
              className={time.selected ? 'selected' : null}
              id={time.id}
              onClick={() => toggleTimeSelection(time.id)}
            >{time.text}</h5>
  ));

  function toggleTimeSelection(id) {
    console.log(id);
    setTimespan(prevState => prevState.map(element => element.id === id ? {...element, selected: true} : {...element, selected: false}))
  }

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
        {timespan}
      </section>
    </div>
  )
}