import { useState } from "react";
import './InfoTimer.css'

export default function InfoTimer(props) {
  const svg = props.svg
  return (
    <section className="timer-container" style={{backgroundColor: `${props.bgColor}`}}>
      <img className="timer-svg" src={`./../../src/assets/images/${svg}`} alt="" height={60} width={60}/>
      <div className="timer-info">
        <span className="timer-title">{props.title}</span>
        <span className="timer-menu">···</span>
        <span className="timer-time">{props.current}hrs</span>
        <span className="timer-previous">Last day - {props.previous}hrs</span>
      </div>
    </section>
  )
}