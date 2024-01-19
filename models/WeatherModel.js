import mongoose from 'mongooes';

const weatherSchema = new mongoose.Schema({
  savedAt:String,
  temperature2m: Number,
  weatherCode:Number,
  time:String,
  

})

export default mongoose.models.Weather || mongoose.model('Weather', weatherSchema)