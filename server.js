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