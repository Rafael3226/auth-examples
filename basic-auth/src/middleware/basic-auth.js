const { AUTHORIZATION_HEADER, AUTHORIZATION_BASE_64 } = require("../constant");
const { BASIC_AUTH_MIDDLEWARE } = require("../constant/message");

function basicAuthMiddleware(req, res, next) {
  const authorization = req.headers[AUTHORIZATION_HEADER];
  console.log(AUTHORIZATION_HEADER, authorization);
  if (!authorization) {
    return res
      .status(401)
      .json({ error: BASIC_AUTH_MIDDLEWARE.MISSING_AUTHORIZATION });
  }
  if (authorization !== AUTHORIZATION_BASE_64) {
    return res
      .status(403)
      .json({ error: BASIC_AUTH_MIDDLEWARE.INVALID_AUTHORIZATION });
  }

  next();
}

module.exports = basicAuthMiddleware;
