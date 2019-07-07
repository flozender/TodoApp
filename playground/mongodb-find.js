const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        console.log(err);
    }
    console.log("Connected to MongoDB");
    let db = client.db("TodoApp");

    // db.collection('Todos').find({
    //     _id: new ObjectID('5d2199631c8d3c33a104b5e7')
    // }).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log(err);
    // });

    db.collection('Todos').find().count().then((count) => {
        console.log(count);
    }, (err) => {
        console.log(err);
    });


    client.close();
});