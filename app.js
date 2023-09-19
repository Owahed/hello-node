const express = require("express");
const testRouters = require("./router/router");

const app = express();
app.use(express.json());

app.use("/api/test", testRouters);

module.exports = app;
