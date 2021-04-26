const _ = require("lodash");
const config = require("config");
const chalk = require("chalk");

/**
 * Handles errors and sends back response with error status and description
 * or throws 500 error if server has silent error
 * @param {object} error the error being handled
 * @param {object} req the HTTP request object
 * @param {object} res the HTTP resonse object
 * @param {function} next callback argument to go to next express function
 */
module.exports = function errorHandler(error, req, res, next) {
  if (error.status) {
    res.status(error.status);
    res.json({
      status: error.status,
      message: error.message,
      errors: _.chain(error.errors)
        .values()
        .join(", ")
        .value()
    });
  } else if (config.get("api.errors.silent")) {
    res.status(500);
    res.json({
      status: 500,
      message: "Server error."
    });
  } else {
    console.log(chalk.red(error), chalk.red(error.stack));
    res.status(500);
    res.json({
      status: 500,
      message: error
    });
  }
};
