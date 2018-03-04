
var friends = require('../data/friends.js');

module.exports = function (app) {


app.get("/api/friends.js", function(req, res) {
    res.json(friends);
  });

app.post('api/friends',function (req, res){

})


}