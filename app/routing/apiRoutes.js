
var friends = require('../data/friends.js');

module.exports = function (app) {


app.get("/api/friends.js", function(req, res) {
    res.json(friendsArray);
  });

app.post('api/friends',function (req, res){
// This works because of our body-parser middleware
var newFriend = req.body;
var youRmatCh = {};

})


}