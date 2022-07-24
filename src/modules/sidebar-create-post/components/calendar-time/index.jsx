import './index.scss';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useEffect, useState } from 'react';

export default function CalendarTime() {
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    setIsShow(true)
  }, []);
  return (
    <div className={`calendar-time-container${isShow ? ' animate': ''}`}>
      <Calendar
        className={'calendar'}
        defaultView={'month'}
        minDetail={'year'}
      />
      <div className="time">
        <label htmlFor="time">TIME:</label>
        <input type="time" id="time" className="input-time" />
      </div>
    </div>
  );
}
