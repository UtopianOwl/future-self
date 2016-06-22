var express = require("express");
var userRouter = express.Router();
var User = require("../models/user");

userRouter.get("/", function (req, res) {
    User.findOne(req.query, function (err, user) {
        if (err) res.status(500).send(err);
        else res.send(user);
    });
//    User.find(function (err, userList) {
//        if (err) res.status(500).send(err);
//        else res.send(userList);
//    });
});

userRouter.post("/", function (req, res) {
    req.body.messages = [];
    var newUser = new User(req.body);
    newUser.save(function (err, user) {
        if (err) res.status(500).send(err);
        else res.send(user);
    });
});

//userRouter.put("/:id", function(req, res) {
//    User.findByIdAndUpdate(req.params._id, req.body, {new:true}, function (err, user) {
//        if (err) res.status(500).send(err);
//        else res.send(user);
//    });
//});

userRouter.delete("/:id", function (req, res) {
    User.findByIdAndRemove(req.params._id, function (err) {
        if (err) res.status(500).send(err);
        else res.send("Clever Girl!");
    });
})

module.exports = userRouter;