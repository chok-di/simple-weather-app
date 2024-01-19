/*@@For some reason connection to MongoAtlas is always timed out 10 seconds after a request is sent.
    This dbconnection is not used for now, but it will be good to investigate into the issue later
@@*/

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://simpleweatherapp:simple@cluster0.cbp8p68.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
  connectTimeoutMS: 30000,
  socketTimeoutMS: 30000,
});

let isConnected = false;

const dbConnect = async()=> {
  if(!isConnected){
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      isConnected = true;
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
      return client; 
    } catch(err){
      console.error("Failed to connect to MongoDB",err);
      throw err;
  
    } 
    
  }
 
}

export default dbConnect;