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

const db =client.db('Users')

// db.collection('Todos').insertOne({
//     text:'Something to do',
//     completed: false
// }, (err, result) =>{
//     if (err) {
//         return console.log('Unable to insert todo', err);
//     }
// console.log(JSON.stringify(result.ops,undefined,2));
// });

// db.collection('Users').insertOne({
//     name: 'Rajesh',
//     age:52,
//     location:'Fairfax'
//     }, (err, result) => {
//         if (err) {
//             return console.log('Unable to insert user', err);
//         }
//         console.log(result.ops[0]._id.getTimestamp());
//     });

client.close();
});