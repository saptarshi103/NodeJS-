const express = require('express')
const app = express()
const db = require('./db')

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/',  (req, res) =>{
  res.send('Welcome to my hotel ! How can i help you? ')
})



const personRoutes = require('./routes/personRoutes');  //import person files
app.use('/person', personRoutes);                       //use that files

const menuRoutes = require('./routes/menuRoute');  //import person files
app.use('/menu', menuRoutes);                       //use that files


app.listen(3001,()=>console.log('server is running on port 3001'));
