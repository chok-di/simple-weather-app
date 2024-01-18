import React from 'react';

const HistoricalWeather = (props) => {
  const data = props.data;
  console.log("hello");
  console.log(data);
  const past5days = data.map(day => 
    <>
     <p>{day.date}</p>
     <p>{day.weathercode}</p>
     <p>{day.maxTemperature}</p>
     <p>{day.minTemperature}</p>
    </>)
  return(
    <div>
      hello
      {past5days}
    </div>
  )
}



export default HistoricalWeather;


