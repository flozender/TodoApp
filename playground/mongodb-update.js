const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        console.log(err);
    }
    console.log("Connected to MongoDB");
    let db = client.db("TodoApp");

    // db.collection('Todos').findOneAndUpdate({
    //     text: "Go Shopping"
    // },{
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        name: "Ninja"
    }, {
        $set: {
            name: "Yoshi",
            age: 10
        }
    }, {
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    });

    client.close();
});