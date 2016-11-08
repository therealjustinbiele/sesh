var User = require('../models/user');

module.exports.signup = function(req, res){
  var user =  new User(req.body);
  user.save();

  res.json(req.body)
}

module.exports.login = function(req, res){
  User.find(req.body, function(err, results){
    if (err){
      console.log('Error in the authentication controller: ', err)
    }
    if (results && results.length === 1) {
      res.json(req.body.email)
    }
  })
}