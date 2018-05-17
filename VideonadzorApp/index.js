//const mongoose = require('mongoose');

//mongoose.connect('mongodb+srv://aalic:aalic@videonadzor-kxlur.mongodb.net/test?retryWrites=true');

var MongoClient = require('mongodb').MongoClient;
const express = require('express')
var bodyParser = require('body-parser')

var uri = "mongodb+srv://aalic:aalic@videonadzor-kxlur.mongodb.net/test?retryWrites=true";
MongoClient.connect(uri, function(err, client) {
   const collection = client.db("test").collection("devices");
   collection.insert({param1:"nesto",param2:"ooo"});
   // perform actions on the collection object
   client.close();
});



const app = express()

const PORT = 27017;

app.use(bodyParser.json());

app.post('/addVideo', (req,res)=>{
    console.log('dosao sam ovdje')
    console.log( req.body ) 
   MongoClient.connect(uri, function(err, client){
        if (err) throw err;
        const collection = client.db('test').collection('videos');
        collection.insertOne(req.body, (err,res)=>{
            if(err)throw err;
            //console.log(res);
            console.log('Navodno smo upisali jedan fjal')
            client.close();
        });
        
    })
    res.send('sve je dobro')
})

app.listen(PORT, ()=>console.log(`Server is running on port ${PORT}`) )
