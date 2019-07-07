// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log(err);
    }

    console.log("Connected to MongoDB");
    const db = client.db("TodoApp");

    db.collection('Todos').insertOne({
        text: "Learn Testing",
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log("Can't connect!", err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));

    });

    // Insert new doc into Users (name, age, location)

    // db.collection("Users").insertOne({
    //     name: "Tayeeb",
    //     age: 20,
    //     address: "Hyderabad"
    // }, (err, result) => {
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    client.close();
});