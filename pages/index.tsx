import React from 'react'

import CurrentWeather from "../src/components/CurrentWeather";
import HistoricalWeather from "../src/components/HistoricalWeather";

import getHistoricalWeather from "../src/helpers/weather/getHistoricalWeather";

import {GetServerSideProps} from 'next';
import {HistoricalDaily} from "../src/types";

export const getServerSideProps: GetServerSideProps = async() =>{
  try{
    const historicalWeatherData: HistoricalDaily[] = await getHistoricalWeather();
    return { props: { historicalWeatherData } };
  } catch(err) {
    console.error("SSR Failed: Can't retrieve past 5 days weather", err);
    return { props: { historicalWeatherData: [] } };
  }
}


const Home: React.FC<{ historicalWeatherData: HistoricalDaily[]}> = ({ historicalWeatherData }) => {
  return (
    <main className="flex justify-center bg-gray-200 p-3 md:p-5 min-h-screen">
      <div className="w-full max-w-4xl p-5">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 md:mb-5">Very Simple Brutalist Weather App</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 border border-gray-400">
          <CurrentWeather />
        </div>
        <div className="bg-white p-4 border border-gray-400">
          <HistoricalWeather data={historicalWeatherData} />
        </div>
      </div>
      </div>
    </main>

  )
}
export default Home;
