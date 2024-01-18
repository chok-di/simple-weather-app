import React from 'react';

import getHistoricalWeather from "../helpers/weather/getHistoricalWeather";






const HistoricalWeather: React.FC<HistoricalWeatherProps> = ({historicalWeatherData}) => {
  console.log("hello");
  console.log(historicalWeatherData);
  return(
    <div>
      hello
      {/* {historicalWeatherData[0].date} */}
    </div>
  )
}



export default HistoricalWeather;


