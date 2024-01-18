import React from 'react'
import Image from 'next/image'

import CurrentWeather from "../src/components/CurrentWeather";
import HistoricalWeather from "../src/components/HistoricalWeather";
import getHistoricalWeather from "../src/helpers/weather/getHistoricalWeather";





interface HistoricalDaily {
  date: string;
  maxTemperature: number;
  minTemperature: number;
  weatherCode: number;
}

interface HistoricalWeatherProps {
  historicalWeatherData: HistoricalDaily[];
}

interface WeatherApiResponse {
  temperature2mMax: Float32Array;
  temperature2mMin: Float32Array;
  weatherCode: Float32Array;
  time: Date[];
}




export async function getServerSideProps(): Promise<{props: HistoricalWeatherProps}>{
  const response: WeatherApiResponse = await getHistoricalWeather();
  let historicalWeatherData: HistoricalDaily[] = [];
  for (let i = 0; i < 5; i++){
    let dailyWeather: HistoricalDaily = {date:"",maxTemperature:0,minTemperature:0,weatherCode:0}
    dailyWeather.maxTemperature = response.temperature2mMax[i];
    dailyWeather.minTemperature = response.temperature2mMin[i];
    dailyWeather.weatherCode = response.weatherCode[i];
    dailyWeather.date = response.time[i].toLocaleDateString();
    historicalWeatherData.push(dailyWeather);

  }
  console.log(historicalWeatherData);
  return {props:{historicalWeatherData}};

}


const Home = ({historicalWeatherData}) => {
  console.log("data");
  console.log(historicalWeatherData);

  return (
    <main>
      <p>Hello</p>
      {historicalWeatherData[0].date}
      <CurrentWeather/>  
      <HistoricalWeather data = {historicalWeatherData}/> 
    </main>
  )
}

export default Home;
