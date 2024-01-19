var express = require("express");
var path = require("path");
const bodyParser = require('body-parser');
var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


app.get("/", function(req, res){
    res.sendFile(path.join(__dirname,'./public/example.html'));

});

app.post('/addName', (req, res) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const age = req.body.age;
    const email = req.body.email;
    const date = req.body.date;
   
    console.log('Received data:', fname ,lname, age , email, date );
   res.redirect("/");
 }); 
 


app.listen(3000, function(){
   console.log("Example is running on port 3000");
});



// 



const mongoose = require('mongoose');

// Replace the connection string with your MongoDB connection string
const connectionString = 'mongodb+srv://lyovaminasyan:lyov2126@cluster0.yhxeiwi.mongodb.net/?retryWrites=true&w=majority';


// Connect to MongoDB
mongoose.connect(connectionString, { useUnifiedTopology: true });

// Check the connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
console.log('Connected to MongoDB!');

// You can add additional code here for testing or other operations
// Make sure to close the connection when you're done
mongoose.connection.close();
});



// var MongoClient = require('mongodb').MongoClient;
// var url = "Cluster0";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });





