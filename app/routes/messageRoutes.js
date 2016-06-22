var express = require("express");
var messageRouter = express.Router();
var User = require("../models/user");
var request = require("request");

messageRouter.post("/", function(req, res) {
    User.findOne(req.query, function(err, user) {
      if (err) res.status(500).send(err);
      else {
          user.messages.push(req.body);
          req.body.number = user.phone;
          console.log(req.body);
          setTimeout(function() {
              request({
                  url: "http://textbelt.com/text",
                  method: "POST",
                  json: req.body
              }, function(err, res, body) {
                  if (err) console.log(err);
                  else console.log(res.statusCode, body);
              });
          }, req.body.timeDelay);
          User.findByIdAndUpdate(user._id, user, {new:true}, function (err, updatedUser) {
              if (err) res.status(500).send(err);
              else res.send(updatedUser);
          });
      }
   }); 
});

module.exports = messageRouter;