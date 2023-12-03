const API_DATA_ROUTE = {
  SUCCESS_MESSAGES: "Authorization is valid. You can access this data.",
};

const BASIC_AUTH_MIDDLEWARE = {
  MISSING_AUTHORIZATION: "Authorization header is missing.",
  INVALID_AUTHORIZATION: "Invalid Authorization.",
};

module.exports = { API_DATA_ROUTE, BASIC_AUTH_MIDDLEWARE };
