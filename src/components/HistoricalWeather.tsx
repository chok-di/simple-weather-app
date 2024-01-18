import React from 'react';

const HistoricalWeather = ({data}) => {

  const colors = ['bg-red-400','bg-green-400','bg-blue-400','bg-yellow-400','bg-purple-400']

  console.log(data);

  const past5days = data.map((day,index) => 
    <div key={index} className={`p-3 mb-2 ${colors[index % colors.length]} border border-gray-400`}>
     <p className="font-bold text-lg text-gray-800">Date: {day.date}</p>
     <p className="text-blue-800">Weather:{day.weatherCode}</p>
     <p className="text-red-800">Daily Max:{day.maxTemperature}</p>
     <p className="text-green-800">Daily Min:{day.minTemperature}</p>
    </div>)
  return(
    <div>
      <h2 className="text-xl font-bold mb-3">Past 5 Days Weather:</h2>
      {past5days}
    </div>
  )
}



export default HistoricalWeather;


