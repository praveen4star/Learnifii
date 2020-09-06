const Group = require("./group");
const Follow = require("./follow");
const Post = require("./post");
const Like = require("./like");
const Comment = require("./comment");
const routes = require("express").Router();

// all routes
routes.use("/group", Group);
routes.use("/follow", Follow);
routes.use("/post", Post);
routes.use("/like", Like);
routes.use("/comment", Comment);
module.exports = routes;
