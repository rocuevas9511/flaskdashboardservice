import express from 'express'
const app = express();
var MongoClient = require('mongodb').MongoClient;
const password = encodeURIComponent("zhQkmspqWuq3EHVVO8ht5kESJgxgIoDHjrjzW8tgXizjYjXxdI889SKlbA3hngkS9CXZ8kWzNGTzhgd88t8fiQ==")
var url =  `mongodb://dbcarebot:${password}@dbcarebot.documents.azure.com:10255/?ssl=true&replicaSet=globaldb`
app.listen(process.env.PORT || 1337, () =>
  console.log(`Example app listening on port ${process.env.PORT || 1337}!`),
);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/satisfaction', (req, res) => {


  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("globaldb");
    dbo.collection("Metrics").find({}).toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      res.send(result)
      db.close();
    });
  });

})




