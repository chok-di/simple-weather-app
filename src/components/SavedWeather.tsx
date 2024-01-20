import React from "react";

import {SavedWeatherData} from "../types";


const SavedWeather :React.FC<{savedData: SavedWeatherData[]}>= ({savedData}) => {

  const savedWeather = savedData.map(data => 
    <div className="p-2 bg-gray-100 border border-gray-300 mb-2">
      <div className="font-mono text-sm text-gray-700">Saved At: {data.savedAt}</div>
      <div className="font-mono text-sm text-gray-700">Measured At:{data.time.toLocaleString()}</div>
      <div className="font-mono text-sm text-gray-700">Temperature:{data.temperature2m}</div>
      <div className="font-mono text-sm text-gray-700">{data.weatherCode}</div>
    </div>)

  return (
    <div className="mt-4 p-4 bg-white border border-grey-400">
    {savedWeather}
    </div>
  )
 
}

export default SavedWeather;