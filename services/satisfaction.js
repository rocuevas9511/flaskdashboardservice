
const connect = require('../db/db')
const DBNAME = "globaldb";
const TABLE_NAME = "Metrics";
const getAllSatisfactions = (req, res) => {
  connect(async db => {
    var dbo = db.db(DBNAME);
    var sentimentResults = await dbo.collection(TABLE_NAME).find({ "Metric": "AVG Text Sentiment" })
      .limit(70)
      .sort({ CalculationDate: -1 })
      .toArray();

    var imageResults = await dbo.collection(TABLE_NAME).find({ "Metric": "Facial Expression Rate" })
      .limit(70)
      .sort({ CalculationDate: -1 })
      .toArray()

    var imageResults = await dbo.collection(TABLE_NAME).find({ "Metric": "Facial Expression Count" })
      .limit(70)
      .sort({ CalculationDate: -1 })
      .toArray()
    res.send(sentimentResults.concat(imageResults))
  
    db.close();
  })
}

const getSatisfactionByRange = (req, res, params) => {
  connect(db => {
    var dbo = db.db(DBNAME);
    let { from, to } = params;

    from = (new Date(from)).toISOString();
    to = (new Date(to)).toISOString();
    dbo.collection(TABLE_NAME).find({
      date: {
        $gte: from,
        $lt: to
      }
    }).toArray((err, result) => {
      if (err) {
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