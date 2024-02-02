var express = require("express");
var path = require("path");
const bodyParser = require('body-parser');
var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
const mongoose = require('mongoose');
const { ObjectId } = require('mongoose').Types;
// Replace the connection string with your MongoDB connection string
const connectionString = 'mongodb+srv://lyovaminasyan:lyov2126@cluster0.yhxeiwi.mongodb.net/CRUD';
// Connect to MongoDB
// mongoose.connect(connectionString, { useUnifiedTopology: true });
// Check the connection
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'Connection error:'));




const { Schema } = mongoose;
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

const SchemaClient = new Schema({
Client_fName: String,
Client_lname: String,
Client_email: String,
Client_age: Number,
Client_password: String,

});

const clients = mongoose.model('clients', SchemaClient);
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', async () => {
console.log('Connected to MongoDB!');
try {
const accProgm = await clients.createCollection();

} catch (error) {
console.error('Error retrieving data:', error);
} finally {
mongoose.connection.close();
}
});


app.get("/", function(req, res){
    mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection error:'));
    db.once('open', async () => {
        try {
            let result = await mongoose.connection.db.collection('clients').find().toArray()
            res.render('../public/example.ejs', {
                obj: result
            });
        } catch (error) {
            console.error('Error retrieving movies:', error);
        } finally {
            mongoose.connection.close();
        }
    })
});





app.post('/addName', async (req, res) => {
    const fname = req.body.fname;
    const password = req.body.password;
    const email = req.body.email;
    const lname = req.body.lname;
    const age = req.body.age;
    const uuid = req.body.uuid;
    mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection error:'));
    db.once('open', async () => {
        console.log('Connected to MongoDB!');
        try {
           let result = await mongoose.connection.db.collection('clients').insertOne({
                name: fname,
                lname: lname,
                email: email,
                password: password,
                age: age,
                uuid: uuid,

            })
         res.redirect('/')
        } catch (error) {
            console.error('Error retrieving movies:', error);
        } finally {
            mongoose.connection.close();
        }
    })
 });


 app.get("/delete/:id", function (req, res) {
    var id = req.params.id;
       mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
       const db = mongoose.connection;
       db.on('error', console.error.bind(console, 'Connection error:'));
       db.once('open', async () => {
           try {
               let result = await mongoose.connection.db.collection('clients').deleteOne({_id: new ObjectId(id)});
               res.json(result);
           } catch (error) {
               console.error('Error retrieving movies:', error);
           } finally {
               mongoose.connection.close();
           }
       })
   });


   app.get("/update/:id", function (req, res) {
    var id = req.params.id;
    mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection error:'));
    db.once('open', async () => {
        try {
            let result = await mongoose.connection.db.collection('clients').findOne({_id: new ObjectId(id)});
            res.render('../public/update.ejs', {
                obj: result
            });
        } catch (error) {
            console.error('Error retrieving movies:', error);
        } finally {
            mongoose.connection.close();
        }
    })
});


app.post("/updateData", function (req, res) {
    const name = req.body.name;
    const lname = req.body.lname;
    const age = req.body.age;
    const email = req.body.email;
    const password = req.body.password;
    const id = req.body.id;

    mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'Connection error:'));

    db.once('open', async () => {
        console.log('Connected to MongoDB!');

        try {
            let result = await mongoose.connection.db.collection('clients').updateOne(
                { _id: new ObjectId(id) },
                { $set: { name: name, lname: lname, age: age, email: email, password: password } }
            );

           res.redirect('/')
        } catch (error) {
            console.error('Error updating product:', error);
        } finally {
            mongoose.connection.close();
        }
    });
});





 app.listen(3000, function(){
    console.log("Example is running on port 3000");
 });




















// db.once('open', async() => {
//     console.log('Connected to MongoDB!');
//     try {
//         app.post('/addName', async(req, res) => {
//             const fname = req.body.fname;
//             const lname = req.body.lname;
//             const age = req.body.age;
//             const email = req.body.email;
//             const date = req.body.date;
//             const password= req.body.password;
//             var result = await mongoose.connection.db.collection('users').insertOne(
//                  {
//                     name : fname,
//                     email : email,
//                     password : password,
//                 }
//                )
//             console.log(result);
//             console.log('Received data:', fname ,lname, age , email, date );
//            res.redirect("/");


//          });

//          }catch (error) {
//         console.error('Error retrieving movies:', error);
//         } finally {
//         mongoose.connection.close();
//         }

//         //toArray() find({ $or :[{"location.address.city":"California" }, {"location.address.city" : "Long Beach"} ] }


//     // You can add additional code here for testing or other operations
//     // Make sure to close the connection when you're done
//     mongoose.connection.close();
//     });




//
