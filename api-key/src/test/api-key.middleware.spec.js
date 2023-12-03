const request = require("supertest");
const app = require("../app");
const { PORT } = require("../constant");
const { API_DATA_ROUTE, API_KEY_MIDDLEWARE } = require("../constant/message");

describe("API Endpoints", () => {
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
    const response = await request(server).get("/api/resource");
    expect(response.status).toBe(401);
    expect(response.body).toEqual({
      error: API_KEY_MIDDLEWARE.MISSING_API_KEY,
    });
  });

  it("should return 403 for invalid API key", async () => {
    const response = await request(server)
      .get("/api/data")
      .set("authorization", "INVALID_API_KEY");
    expect(response.status).toBe(403);
    expect(response.body).toEqual({
      error: API_KEY_MIDDLEWARE.INVALID_API_KEY,
    });
  });

  it("should return 200 for a valid API key", async () => {
    const response = await request(server)
      .get("/api/data")
      .set("authorization", "YOUR_API_KEY");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: API_DATA_ROUTE.SUCCESS_MESSAGES,
    });
  });
});
