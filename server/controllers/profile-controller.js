var User = require('../models/user.js');
var path = require('path');
var fs = require('fs');


module.exports.updatePhoto = function(req, res){

  var file = req.files.file;
  var userId = req.body.userId;
  var tempPath = file.path;
  var uploadDate = new Date();
  var targetPath = path.join(__dirname, '../../uploads/' + userId + uploadDate + file.name);
  var savePath = "/uploads/" + userId + uploadDate + file.name;

  fs.rename(tempPath, targetPath, function(err){
    if (err){
      console.log("There has been a grave error: ", err)
    }
    else{
      console.log("File Successfully moved")
      User.findById(userId, function(err, userData){
        var user = userData;
        user.image = savePath;
        user.save(function(err){
          if (err){
            console.log("Failed to save")
            res.json({status: 500})
          }
          else{
            console.log("Save successful");
            res.json({status: 200})
          }

        })
      })
    }
  })
};






module.exports.updateUsername = function(req, res){
  var username = req.body.username;
  var userId = req.body.userId;

  User.findById(userId, function(err, userData){
    var user = userData;
    user.username = user;

    user.save(function(error){
      if (err){
        console.log("Failed to save username");
        res.json({status: 500});
      }
      else{
        console.log("Successfully updated username");
        res.json({status: 200})
      }
    })
  })





};


























































































