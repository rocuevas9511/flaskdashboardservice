var express = require('express')
const app = express();
const satisfactionService = require('../services/satisfaction')


app.listen(process.env.PORT || 1337, () =>
  console.log(`Example app listening on port ${process.env.PORT || 1337}!`)
);

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.get('/satisfaction', (req, res) => {
  const {from , to}  = req.query
  if(from && to){
    satisfactionService.getSatisfactionByRange(req, res, { from , to })
  }else{
    satisfactionService.getAllSatisfactions(req, res)
  }
})




