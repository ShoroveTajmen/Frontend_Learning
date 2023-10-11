const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
//for findingg post body
app.use(express.json());

app.get('/', (req, res)=> {
    res.send('SIMPLE CRUD IS RUNNINGG')
})

app.listen(port, ()=>{
    console.log(`simple crud is running on port, ${port}`)
})