const express = require('express');         //get express library
const app = express();                      //copy it into app
const db = require('./db');                 // importing database connection file 
require('dotenv').config();                 //importing .env file

const bodyParser = require('body-parser');  //middleware( data from http is parsed from http body!)
app.use(bodyParser.json());

app.get('/',  (req, res) =>{
  res.send('Welcome to my hotel ! How can i help you? ')
})



const personRoutes = require('./routes/personRoutes');  //import person files
app.use('/person', personRoutes);                       //use that files

const menuRoutes = require('./routes/menuRoute');  //import person files
app.use('/menu', menuRoutes);                       //use that files

const PORT =process.env.PORT;
app.listen(PORT,()=>console.log('server is running '));
