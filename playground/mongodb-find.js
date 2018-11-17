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

db.collection('Users').find({name: 'Rajesh'}).count().then((count) => {
     console.log (`Users Count: ${count}`);
     }, (err) => {
     console.log('Unable to Fetch todos', err)
     });

     db.collection('Users').find({name: 'Rajesh'}).toArray().then((docs) => {
        console.log ('Users');
        console.log(JSON.stringify(docs,undefined, 2));
        }, (err) => {
        console.log('Unable to Fetch todos', err)
        });
   

    //  db.collection('Todos').find().count().then((count) => {
    //     console.log (`Todos Count: ${count}`);
    //     }, (err) => {
    //     console.log('Unable to Fetch todos', err)
    //     });

// db.collection('Todos').find({_id: new ObjectID('5bf0671313e37c1cef0c8bed')}).toArray().then((docs) => {
// console.log ('Todos');
// console.log(JSON.stringify(docs,undefined, 2));
// }, (err) => {
// console.log('Unable to Fetch todos', err)
// }); //Commaon cursor method to get the document is ToArray. Instead of having cursor we have the documents the Array of object
//client.close();
});