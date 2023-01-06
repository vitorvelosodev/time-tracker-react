import './Profile.css'
import { useState } from 'react'
import Timespan from '../Timespan/Timespan';

export default function Profile(props) {
  const [selectID, setSelectID] = useState(1);

  return (
    <div className='profile-container'>
      <section className='profile-area'>
        <img className='profile-photo' src={`./images/${props.profilePic}`} alt="Profile picture" />
        <div className='profile-info'>
          <h4>Report for</h4>
          <h2>{props.firstName} {props.lastName}</h2>
        </div>
      </section>
      <section className='timespan-selection'>
        <Timespan
          id={'daily'}
          selectID={props.timespan}
          handleClick={() => props.setTimespan('daily')}
        >Daily</Timespan>
        <Timespan
          id={'weekly'}
          selectID={props.timespan}
          handleClick={() => props.setTimespan('weekly')}
        >Weekly</Timespan>
        <Timespan
          id={'monthly'}
          selectID={props.timespan}
          handleClick={() => props.setTimespan('monthly')}
        >Monthly</Timespan>
      </section>
    </div>
  )
}