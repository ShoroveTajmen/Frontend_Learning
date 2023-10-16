const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

//middleware
const corsOptions ={
    origin:'*', 
    credentials:true,
    optionSuccessStatus:200,
 }
 app.use(cors(corsOptions))
 //access post body and convert into json format
 app.use(express.json());


app.get('/', (req, res) => {
    res.send('Coffee Making server is running')
})

app.listen(port, () => {
    console.log(`Coffee server is ruuning on port ${port}`)
})
