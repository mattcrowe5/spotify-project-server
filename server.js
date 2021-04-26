const dotEnv = require("dotenv").config();

const config = require("config");
const app = require("./app");

const port = config.get("server.port");

let server;

function start() {
  app.listen(3001, () => {
    console.log(`Server listening on port 3001`);
  });
}

process.on("SIGINT", function() {
  if (server) server.close();
  process.exit(0);
});

process.on("unhandledRejection", (reason, p) => {
  console.log("Unhandled Rejection at: Promise", p, "reason:", reason);
  console.log("Unhandled Rejection Stack:", reason.stack);
  // application specific logging, throwing an error, or other logic here
});

process.on("uncaughtException", err => {
  console.log("Uncaught Exception:", err);
});

start();
