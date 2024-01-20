
import dbConnectLocal from '../../lib/dbConnectLocal';
import Weather from '../../models/WeatherModel';



const handler = async(req,res) => {
  dbConnectLocal();
  if(req.method === 'GET') {
    try{
      const weatherData = await Weather.find({});
      res.status(200).json({data: weatherData});
    } catch(err){
      console.lerror('Error getting saved weather data:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else if (req.method === 'POST') {
    const newData = req.body;
    try{
      const newWeather = new Weather(newData);
      await newWeather.save({maxTimeMS: 30000});
      return res.status(201).json({message:"Data saved", data:newWeather});
    } catch(err){
      console.error('Error saving weather data:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
      
  }
}


export default handler;
