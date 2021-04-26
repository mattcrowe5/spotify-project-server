const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const errorHandler = require("./middleware/error-handler");
const routes = require("./routes");

const app = express();

app.use(
  bodyParser.json({
    verify(req, res, buf) {
      if (req.get("X-Hub-Signature") || req.query.signature) {
        req.rawBody = buf.toString();
      }
    }
  })
);

app.use(cors({ credentials: true }));
app.options("*", cors({ credentials: true }));

routes(app);

app.use(errorHandler);

module.exports = app;
