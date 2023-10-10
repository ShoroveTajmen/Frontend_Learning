const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello my first ever express server!')
})

app.get('/data', (req, res)=> {
    res.send('More data comingg soon')
})


app.listen(port, () => {
    console.log(`My first server is running on portt: ${port}`)
})