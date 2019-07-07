// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log(err);
    }
    console.log("Connected to MongoDB");
    const db = client.db("TodoApp");

    db.collection('Todos').deleteMany({text: 'Eat Rice'}).then((result) =>{
        console.log(result);
    });


    // client.close();
});