const express = require("express");
const apiKeyMiddleware = require("./middleware/api-key");
const { API_DATA_ROUTE } = require("./constant/message");

const app = express();

// Add other middleware and routes here
app.use("/api", apiKeyMiddleware);

// Your API routes go here
app.get("/api/data", (_, res) => {
  res.json({ message: API_DATA_ROUTE.SUCCESS_MESSAGES });
});

module.exports = app;
