import mongoose from 'mongoose';

const weatherSchema = new mongoose.Schema({
  savedAt:String,
  temperature2m: Number,
  weatherCode:Number,
  time:Date,
})

//a Post-Save Hook to delete the oldest saved data when the total number of data entry exceeds 5. 

// weatherSchema.post('save', async(doc,next) => {
//   try{
//     const count = await this.model("Weather").countDocuments();
//     if(count > 5){
//       const oldestDoc = await this.model('Weather').findOne().sort({savedAt: 1});
//       if (oldestDoc){
//         await oldestDoc.remove();
//       }
//     }
//   } catch (err) {
//     next(err);
//   }
//   next();
// });

const Weather = mongoose.model('Weather', weatherSchema);

export default Weather;