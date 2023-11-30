const { API_KEY_HEADER_NAME, API_KEY } = require("../constant");
const { API_KEY_MIDDLEWARE } = require("../constant/message");

function apiKeyMiddleware(req, res, next) {
  const apiKey = req.headers[API_KEY_HEADER_NAME];

  if (!apiKey) {
    return res.status(401).json({ error: API_KEY_MIDDLEWARE.MISSING_API_KEY });
  }
  if (apiKey !== API_KEY) {
    return res.status(403).json({ error: API_KEY_MIDDLEWARE.INVALID_API_KEY });
  }

  next();
}

module.exports = apiKeyMiddleware;
