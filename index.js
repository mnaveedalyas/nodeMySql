const express = require('express');
const bodyParser = require('body-parser');
const mySqldb = require('./db/dbConnect')
const router = require('./routes/userRoutes')

const app = express();
app.use(bodyParser.json());

mySqldb.connectMysql();


app.listen({port: 3100}, () => {
    console.log('listening at http://localhost:3100/')
});

app.use('/api/users', router );

app.get('/', (req, res) =>{
    res.send('<h1>Node with MySQl app is on</h1>');
})