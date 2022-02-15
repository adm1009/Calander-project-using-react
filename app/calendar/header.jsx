import React from "react";

const CalendarHeader = ({value, setValue}) => {

    const currMonthName = () =>{
        return value.format("MMMM")
    }
  
    const currYear =() =>{
        return value.format("YYYY")
    }
    
  const prevMonth = () =>{
      return value.clone().subtract(1,"month");
  }
  const nextMonth = () =>{
      return value.clone().add(1,"month");
  }

  return (
    <div className="header">
      <div
        className="previous"
        style={{
          display: "inline-block",
          marginRight: "60px",
          marginTop: "15px",
        }}
        onClick={() => setValue(prevMonth())}
      >
        {String.fromCharCode(171)}
      </div>
      <div className="current" style={{ display: "inline-block" }}>
        {currMonthName()}-{currYear()}
      </div>
      <div
        className="next"
        style={{ display: "inline-block", marginLeft: "60px" }}
        onClick={() => setValue(nextMonth())}
      >
        {String.fromCharCode(187)}
      </div>
    </div>
  );
};

export default CalendarHeader;
