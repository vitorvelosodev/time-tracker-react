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
          id={1}
          selectID={selectID}
          handleClick={() => setSelectID(1)}
        >Daily</Timespan>
        <Timespan
          id={2}
          selectID={selectID}
          handleClick={() => setSelectID(2)}
        >Weekly</Timespan>
        <Timespan
          id={3}
          selectID={selectID}
          handleClick={() => setSelectID(3)}
        >Monthly</Timespan>
      </section>
    </div>
  )
}