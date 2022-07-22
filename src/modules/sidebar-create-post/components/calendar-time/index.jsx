import "./index.scss";

import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

export default function CalendarTime() {
  return (
    <div className="calendar-time-container">
      <Calendar className={'calendar'} defaultView={"month"} minDetail={"year"}/>
      <div className="time">
        <label htmlFor="time">TIME:</label>
        <input type="time" id="time" className="input-time"/>
      </div>
    </div>
  )
}