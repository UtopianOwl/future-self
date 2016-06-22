var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
var bodyParser  = require("body-parser");
var userRouter = require("./app/routes/userRoutes");
var messageRouter = require("./app/routes/messageRoutes");
var path = require("path");
var app = express();
var port = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());
app.use("/", express.static(path.join(__dirname, "public")));
app.use("/future-self/user", userRouter);
app.use("/future-self/message", messageRouter);

mongoose.connect("mongodb://localhost/future-self");

app.listen(port, function() {
    console.log("Server running at http://localhost:" + port);
});