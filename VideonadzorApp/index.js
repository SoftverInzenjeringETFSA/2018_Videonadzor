//const mongoose = require('mongoose');

//mongoose.connect('mongodb+srv://aalic:aalic@videonadzor-kxlur.mongodb.net/test?retryWrites=true');

var MongoClient = require('mongodb').MongoClient;
const express = require('express')
const app = express()
var bodyParser = require('body-parser')

var multer = require('multer')
var upload = multer({ dest: 'uploads/' })

const PORT = 27017;


var uri = "mongodb+srv://aalic:aalic@videonadzor-kxlur.mongodb.net/test?retryWrites=true";
/*MongoClient.connect(uri, function(err, client) {
   const collection = client.db("test").collection("devices");
   collection.insert({param1:"nesto",param2:"ooo"});
   // perform actions on the collection object
   client.close();
});*/


app.use(express.static('/public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET');
      return res.status(200).json({});
  }
     next();
  });

app.post('/zakaziTermin', (req, res)=>{
    console.log(req.body )
    var vrPoc = new Date(req.body.vrijemePocetka); 
    var vrKr = new Date(req.body.vrijemeKraja); 

    //kompenzacija, jer se nesto poremetila vremenska zona 
    vrPoc.setHours(vrPoc.getHours() + 2);
    vrKr.setHours(vrKr.getHours() + 2);

    req.body.vrijemePocetka = vrPoc; 
    req.body.vrijemeKraja = vrKr; 
    
    MongoClient.connect(uri, function(err, client){
        if (err) throw err;
        const collection = client.db('test').collection('terminiSnimanja');
        collection.insertOne(req.body, (err,res)=>{
            if(err)throw err;
            //console.log(res);
            client.close();
            
        });
        
    })
    res.send("Uspjesno je upisano vrijeme " + JSON.stringify(req.body) )
})

app.post('/dajTermine', (req, res)=>{    
    MongoClient.connect(uri, function(err, client){
        if (err) throw err;
        const collection = client.db('test').collection('terminiSnimanja');
        collection.find({}).toArray(function(err, results) {            
            res.send(results);
            client.close();
        });        
    }) 
})

app.post('/brisiTermin', (req, res)=>{    
    console.log(req.body)
    MongoClient.connect(uri, function(err, client){
        if (err) throw err;        
        const collection = client.db('test').collection('terminiSnimanja');
        collection.deleteOne({ vrijemePocetka: req.body.vrijemePocetka, vrijemeKraja: req.body.vrijemeKraja }, function(err, obj) {
            if (err) throw err;
            res.send(obj.result.n + " document(s) deleted");
            client.close();
        });
    });
})


app.post('/addVideo', upload.single('data'), (req,res, next)=>{
    console.log('dosao sam ovdje')
    console.log( req.body ) 
    console.log(req.file)
   MongoClient.connect(uri, function(err, client){
        if (err) throw err;
        const collection = client.db('test').collection('videos');
        collection.insertOne({name: new Date(), data:req.file}, (err,res)=>{
            if(err)throw err;
            //console.log(res);
            console.log('Navodno smo upisali jedan fjal')
            client.close();
        });
        
    })
    res.send('sve je dobro')
})

app.post('/searchVideos', upload.single('data'), (req,res, next)=>{
    let searchString = req.body.data;
    //kontakt sa bazom radi ali trenutno polja ne lice ni nasta zbog silnog testiranja, pa se vracaju uvijek isti podaci dok se ne popravi baza
    
    MongoClient.connect(uri, function(err, client){
        if (err) throw err;
        const collection = client.db('test').collection('videos');
        collection.find({}).toArray(function(err, results) {
           // console.log(results);
            res.send(results);
        });
    }) 
//let searchResults = [{naziv: "01-02-2018_22-30", kamera: 1}, {naziv: "01-03-2018_22-30", kamera: 2}, {naziv: "01-04-2018_22-30", kamera: 1}];
//res.send(searchResults)
})

app.post('/getVideo', upload.single('data'), (req,res, next)=>{
    let searchString = req.body.data;
    //kontakt sa bazom radi ali trenutno polja ne lice ni nasta zbog silnog testiranja, pa se vracaju uvijek isti podaci dok se ne popravi baza
    
    MongoClient.connect(uri, function(err, client){
        if (err) throw err;
        const collection = client.db('test').collection('videos');
        collection.find({"filename":"52f32b961958a952b992169205e5c696"}).toArray(function(err, results) {
         console.log(results);
            res.send(results);
        });
    })
    })

app.post('/addArchive', upload.single('data'), (req,res, next)=>{
   //console.log(req.body);
   MongoClient.connect(uri, function(err, client) {
    const collection = client.db("archive").collection("video");
    collection.insertOne({name:new Date(), data:req.body}, (err,res)=>{
        if(err)throw err;
       console.log("jjjjjjjjjjjj");
        client.close();
    });
})
})



app.listen(PORT, ()=>console.log(`Server is running on port ${PORT}`) )
