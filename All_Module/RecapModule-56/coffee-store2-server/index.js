const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

//middleware
const corsOptions ={
    origin:'*', 
    credentials:true,
    optionSuccessStatus:200,
 }
 app.use(cors(corsOptions))
 //access post body and convert into json format
 app.use(express.json());

//connect with mongodb
 const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.es62grd.mongodb.net/?retryWrites=true&w=majority`;

 
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

    //create a database and database collection
    const coffeeCollection = client.db('coffee2DB').collection('coffee2');

    app.get('/coffee', async(req, res) => {
        const cursor = coffeeCollection.find();
        const result = await cursor.toArray();
        res.send(result);
    })

    //get operation for uupdate data
    app.get('/coffee/:id', async(req, res) => {
        const id = req.params.id;
        const query = {_id: new ObjectId(id)}
        const result = await coffeeCollection.findOne(query);
        res.send(result);
    })

    app.post('/coffee', async(req, res) => {
        const newCoffee = req.body;
        console.log(newCoffee);
        const result = await coffeeCollection.insertOne(newCoffee);
        res.send(result)
    })

    app.put('/coffee/:id', async(req, res) => {
        const id = req.params.id;
        const filter  = {_id: new ObjectId(id)}
        const options = { upsert: true};
        const updatedCoffee = req.body;
        const coffee = {
            $set: {
                 name: updatedCoffee.name,
                 quantity: updatedCoffee.quantity,
                 supplier: updatedCoffee.supplier,
                 taste: updatedCoffee.taste,
                 category: updatedCoffee.category,
                 details: updatedCoffee.details,
                 photo: updatedCoffee.photo
            }
        }
        const result = await coffeeCollection.updateOne(filter, coffee, options );
        res.send(result);
    })

    app.delete('/coffee/:id', async(req, res) => {
        const id = req.params.id;
        const query = {_id: new ObjectId(id)}
        const result = await coffeeCollection.deleteOne(query);
        res.send(result);
    })




     // Send a ping to confirm a successful connection
     await client.db("admin").command({ ping: 1 });
     console.log("Pinged your deployment. You successfully connected to MongoDB!");
   } finally {

   }
 }
 run().catch(console.dir);
 


app.get('/', (req, res) => {
    res.send('Coffee Making server is running')
})

app.listen(port, () => {
    console.log(`Coffee server is ruuning on port ${port}`)
})
