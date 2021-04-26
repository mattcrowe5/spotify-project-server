const async = require("async");
const config = require("config");

const login = require("./login");

module.exports = app => {
  app.use("/login", login);
};
