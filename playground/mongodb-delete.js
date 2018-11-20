// const MongoClient = require('mongodb').MongoClient;
// The above commented code is same as above after rewriting the variable

const {MongoClient, ObjectID} = require('mongodb');

//Generating and capturing new dynamic ID
var obj = new ObjectID();
console.log(obj);

// Tes for checking the user name
// var user = {name: 'Rajesh', age: 52};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client)=>{
if (err) {
    return console.log('Unable to connect to MongoDB Server');
}
console.log('Connected to MongoDB Server');

//const db =client.db('TodoApp')
const db =client.db('Users')

//deleteMany
        // db.collection('Todos').deleteMany({text: "Eat Lunch"}).then((result) =>{
        //     console.log(result);
        //});

//deleteOne
        // db.collection('Todos').deleteOne({text: "Eat Lunch"}).then((result) =>{
        //     console.log(result);
        // });
//FindOne and Delete sameone
// db.collection('Todos').findOneAndDelete({completed: false}). then((result) =>
// {console.log(result);
// })

//db.collection('Users').deleteMany({name: "Ramesh"});

 db.collection('Users').findOneAndDelete({_id: new ObjectID("5bf05c4943583906b4c2b4d2")

 }).then((results) => {
     console.log(JSON.stringify(results, undefined, 2));
 });

//client.close();
});