import React from 'react'

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




export async function getServerSideProps(): Promise<{ props: HistoricalWeatherProps }> {
  const response: WeatherApiResponse = await getHistoricalWeather();
  let historicalWeatherData: HistoricalDaily[] = [];
  for (let i = 0; i < 5; i++) {
    let dailyWeather: HistoricalDaily = { date: "", maxTemperature: 0, minTemperature: 0, weatherCode: 0 }
    dailyWeather.maxTemperature = response.temperature2mMax[i];
    dailyWeather.minTemperature = response.temperature2mMin[i];
    dailyWeather.weatherCode = response.weatherCode[i];
    dailyWeather.date = response.time[i].toLocaleDateString();
    historicalWeatherData.push(dailyWeather);

  }
  console.log(historicalWeatherData);
  return { props: { historicalWeatherData } };

}


const Home = ({ historicalWeatherData }) => {


  return (
    <main className="bg-gray-200 p-3 md:p-5 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 md:mb-5">Very Simple Brutalist Weather App</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 border border-gray-400">
          <CurrentWeather />
        </div>
        <div className="bg-white p-4 border border-gray-400">
          <HistoricalWeather data={historicalWeatherData} />
        </div>
      </div>
    </main>

  )
}

export default Home;
