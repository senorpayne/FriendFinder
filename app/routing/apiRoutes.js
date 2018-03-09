
var friendsArray = require('../data/friends.js');

module.exports = function (app) {


app.get("/api/friends", function(req, res) {
    res.json(friendsArray);
  });

app.post('/api/friends',function (req, res){
// This works because of our body-parser middleware
var newFriend = req.body;
console.log(newFriend);


//res.json(bestMatch);
friendsArray.push(newFriend);
})

}