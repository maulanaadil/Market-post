import './index.scss';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useEffect, useState } from 'react';

export default function CalendarTime({ schedule, setSchedule }) {
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    setIsShow(true);
  }, []);
  return (
    <div className={`calendar-time-container${isShow ? ' animate' : ''}`}>
      <Calendar
        className={'calendar'}
        defaultView={'month'}
        minDetail={'year'}
        defaultValue={new Date(schedule.date)}
        onChange={(date) => {
          setSchedule({ ...schedule, date: date.toLocaleDateString()});
        }}
      />
      <div className="time">
        <label htmlFor="time">TIME:</label>
        <input
          type="time"
          id="time"
          className="input-time"
          defaultValue={`${schedule.time.split(':')[0]}:${
            schedule.time.split(':')[1]
          }`}
          onChange={(e) => {
            setSchedule({ ...schedule, time: e.target.value });
          }}
        />
      </div>
    </div>
  );
}
