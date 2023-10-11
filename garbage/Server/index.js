const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const users = [
    {id:1, name: 'sabila', email: 'sabana@gmail.com'},
    {id:1, name: 'sabnur', email: 'sabnur@gmail.com'},
    {id:1, name: 'sabila', email: 'sabila@gmail.com'},
]

app.get('/', (req, res) => {
    res.send('Users management server is running');
})
app.get('/users', (req, res)=> {
    res.send(users)
})

app.listen(port, ()=>{
    console.log(`server running on PORT:: ${port}`)
})