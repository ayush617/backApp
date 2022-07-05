const dotenv             = require('dotenv');
dotenv.config();
const express            = require('express');
// const MongoClient     = require('mongodb').MongoClient;
const bodyParser         = require('body-parser');
const frontend           = require('./frontend/index')
const backend            = require('./backend/index');
const app                = express();

app.use("/api",backend);

app.listen(process.env.port, () => {  
    console.log(`${process.env.logo}v${process.env.version}
    We are live on 
    PATH    :${process.env.path}
    PORT    :${process.env.port}
    FRONTEND:http://${process.env.path}:${process.env.port}
    BACKEND :http://${process.env.path}:${process.env.port}/api
    version :${process.env.version}`)
    
});
 
app.get('/',async(req, res) => {
    let template = await frontend.home(req,res)
    res.send(template)
  })
