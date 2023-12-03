const request = require("supertest");
const app = require("../app");
const { PORT, AUTHORIZATION_HEADER } = require("../constant");
const {
  API_DATA_ROUTE,
  BASIC_AUTH_MIDDLEWARE,
} = require("../constant/message");

describe("Basic Auth", () => {
  let server;

  beforeAll((done) => {
    // Start the Express app before running tests
    server = app.listen(PORT, () => {
      done();
    });
  });

  afterAll((done) => {
    // Close the Express app after all tests have run
    server.close(() => {
      done();
    });
  });

  it("should return 401 if API key is missing", async () => {
    const response = await request(server).get("/api/data");
    expect(response.status).toBe(401);
    expect(response.body).toEqual({
      error: BASIC_AUTH_MIDDLEWARE.MISSING_AUTHORIZATION,
    });
  });

  it("should return 403 for invalid API key", async () => {
    const response = await request(server)
      .get("/api/data")
      .set(AUTHORIZATION_HEADER, "INVALID_AUTHORIZATION");
    expect(response.status).toBe(403);
    expect(response.body).toEqual({
      error: BASIC_AUTH_MIDDLEWARE.INVALID_AUTHORIZATION,
    });
  });

  it("should return 200 for a valid API key", async () => {
    const response = await request(server)
      .get("/api/data")
      .set(AUTHORIZATION_HEADER, "dXNlcjpwYXNzd29yZA==");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: API_DATA_ROUTE.SUCCESS_MESSAGES,
    });
  });
});
