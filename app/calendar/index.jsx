import React, { useEffect } from "react";
import moment from "moment";
import "./styles.css";
import { useState } from "react";
import buildCalendar from "./build";
import dayStyles from "./styles";
import Header from "./header";
const Calendar = () => {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

 

  return (
    <div className="calendar">
       <Header value={value} setValue={setValue}/>
       <div className="days">
          {["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].map((d) =>(
               <div className="week">{d}</div>)
           )}
       </div>
      <div className="body">
        {calendar.map((week) => (
          <div>
            {week.map((day) => (
              <div className="day" onClick={() => setValue(day)}>
                <div className={dayStyles(day, value)}>
                  {day.format("D").toString()}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
