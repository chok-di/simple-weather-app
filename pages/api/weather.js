
import dbConnectLocal from '../../lib/dbConnectLocal';
import Weather from '../../models/WeatherModel';


const handler = async (req, res) => {
  dbConnectLocal();
  if (req.method === 'GET') {
    try {
      const weatherData = await Weather.find({});
      res.status(200).json({ data: weatherData });
    } catch (err) {
      console.error('Error getting saved weather data:', err);

    }
  } else if (req.method === 'POST') {
    const newData = req.body;
    try {
      const newWeather = new Weather(newData);
      await newWeather.save({ maxTimeMS: 30000 });
      return res.status(201).json({ message: "Data saved", data: newWeather });
    } catch (err) {
      console.error('Error saving weather data:', err);

    }
  } else if (req.method === 'DELETE') {
    try {
      await Weather.deleteMany({}); // This will delete all documents in the Weather collection
      res.status(200).json({ message: "All weather data deleted successfully" });
    } catch (err) {
      console.error('Error deleting saved weather data from database', err);
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }

}


export default handler;
