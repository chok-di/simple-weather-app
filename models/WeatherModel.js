import mongoose from 'mongoose';

const weatherSchema = new mongoose.Schema({
  savedAt:String,
  temperature2m: Number,
  weatherCode:Number,
  time:Date,
})

//a Post-Save Hook to delete the oldest saved data when the total number of data entry exceeds 5. 

weatherSchema.post('save', async function(doc){
  try{
    const model = this.model("Weather");
    const count = await model.countDocuments();
    if(count > 5){
      const oldestDoc = await model.findOne().sort({savedAt: 1});
      if (oldestDoc){
        console.log("oldestDoc")
        console.log(oldestDoc);
        await model.findByIdAndDelete(oldestDoc._id);
        // await oldestDoc.remove();
      }
    }
  } catch (err) {
    console.error("Post-save hook error",err);
  }
});

const Weather = mongoose.model('Weather', weatherSchema);

export default Weather;