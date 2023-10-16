const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');

//middleware
const corsOptions ={
    origin:'*', 
    credentials:true,
    optionSuccessStatus:200,
 }
 app.use(cors(corsOptions))
 //access post body and convert into json format
 app.use(express.json());

 //coffee2
 //eKRUi23Ey9pSexoQ

//  const uri = "mongodb+srv://<username>:<password>@cluster0.es62grd.mongodb.net/?retryWrites=true&w=majority";
 const uri = "mongodb+srv://coffee2:eKRUi23Ey9pSexoQ@cluster0.es62grd.mongodb.net/?retryWrites=true&w=majority";
 
 // Create a MongoClient with a MongoClientOptions object to set the Stable API version
 const client = new MongoClient(uri, {
   serverApi: {
     version: ServerApiVersion.v1,
     strict: true,
     deprecationErrors: true,
   }
 });
 
 async function run() {
   try {
     // Connect the client to the server	(optional starting in v4.7)
     await client.connect();
     // Send a ping to confirm a successful connection
     await client.db("admin").command({ ping: 1 });
     console.log("Pinged your deployment. You successfully connected to MongoDB!");
   } finally {
     // Ensures that the client will close when you finish/error
     await client.close();
   }
 }
 run().catch(console.dir);
 


app.get('/', (req, res) => {
    res.send('Coffee Making server is running')
})

app.listen(port, () => {
    console.log(`Coffee server is ruuning on port ${port}`)
})
