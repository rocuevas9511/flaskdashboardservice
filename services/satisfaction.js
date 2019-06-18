
const connect = require('../db/db')
const DBNAME = "globaldb";
const TABLE_NAME = "Metrics";
const getAllSatisfactions = (req, res) => {
  connect(db => {
    var dbo = db.db(DBNAME);
    dbo.collection(TABLE_NAME).find({})
      .limit(100)
      .sort({CalculationDate : -1})
      .toArray(function (err, result) {
      if (err) throw err;
      res.send(result)
      db.close();
    });
  })
}

const getSatisfactionByRange = (req, res, params) => {
  connect(db => {
    var dbo = db.db(DBNAME);
    let { from, to } = params;

    from = (new Date(from)).toISOString();
    to  = (new Date(to)).toISOString();
    dbo.collection(TABLE_NAME).find({
      date: {
        $gte: from,
        $lt: to
      }
    }).toArray( (err, result) => {
      if(err){
        throw err;
      }
      db.close()
      res.send(result)

    });
  });
}
module.exports = {
  getAllSatisfactions,
  getSatisfactionByRange
}