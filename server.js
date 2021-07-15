const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://kritika25:delhiguwahati@cluster0.mvf6y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
 .then((result)=>console.log('Database is connected'))
 .catch((err)=>console.log(err))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
const port = 8000;
var cors = require('cors');
app.use(cors());
app.get('/',function(req,res){
    res.send('Hello World');
});

app.post("/save-products", (req,res)=>{
    console.log("req.body in save-products route: ", req.body);
    console.log("Project in process...");
    res.send("Project in process...");
});

app.listen(8000,function(){
    console.log('Server started on port 8000');
});
