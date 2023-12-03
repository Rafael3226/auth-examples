const PORT = 3000;

const AUTHORIZATION_HEADER = "authorization";

const BASIC_AUTH = {
  USER: "user",
  PASSWORD: "password",
};

const AUTHORIZATION_BASE_64 = Buffer.from(
  `${BASIC_AUTH.USER}:${BASIC_AUTH.PASSWORD}`
).toString("base64"); // dXNlcjpwYXNzd29yZA==

module.exports = {
  AUTHORIZATION_HEADER,
  AUTHORIZATION_BASE_64,
  PORT,
};
