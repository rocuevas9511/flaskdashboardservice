var MongoClient = require('mongodb').MongoClient;
const password = encodeURIComponent("zhQkmspqWuq3EHVVO8ht5kESJgxgIoDHjrjzW8tgXizjYjXxdI889SKlbA3hngkS9CXZ8kWzNGTzhgd88t8fiQ==")
var url = `mongodb://dbcarebot:${password}@dbcarebot.documents.azure.com:10255/?ssl=true&replicaSet=globaldb`

const connect = (callback) => {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err
    callback(db)
  })
}

module.exports = connect