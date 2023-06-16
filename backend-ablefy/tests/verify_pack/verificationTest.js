const request = require("supertest");
const prisma = require("../../prisma");
const app = require("../../server");
const seed = require("../../prisma/seed");

beforeAll(async () => {
  await seed();
});

afterAll(async () => {
  await prisma.$disconnect();
});

describe.skip("Test Endpoints", () => {
  it("verify_pack.should get all songs paginated by a default size 10", async () => {
    const res = await request(app).get("/api/songs");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("data");
    expect(res.body.data.length).toEqual(10);
  });

  it("verify_pack.should get all songs paginated with custom size", async () => {
    const res = await request(app).get("/api/songs?size=5");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("data");
    expect(res.body.data.length).toEqual(5);
  });

  it("verify_pack.should get all songs paginated with custom page", async () => {
    const resPage1 = await request(app).get("/api/songs?page=1");
    expect(resPage1.statusCode).toEqual(200);
    expect(resPage1.body).toHaveProperty("data");
    expect(resPage1.body.data.length).toEqual(10);
    const res = await request(app).get("/api/songs?page=1");
    const resPage2 = await request(app).get("/api/songs?page=2");
    expect(resPage2.statusCode).toEqual(200);
    expect(resPage2.body).toHaveProperty("data");
    expect(resPage2.body.data.length).toEqual(10);
    const resPage3 = await request(app).get("/api/songs?page=3");
    expect(resPage3.statusCode).toEqual(200);
    expect(resPage3.body).toHaveProperty("data");
    expect(resPage3.body.data.length).toEqual(3);
  });

  it("verify_pack.should get the top ten songs", async () => {
    const res = await request(app).get("/api/songs/top");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("data");
    expect(res.body.data.length).toEqual(10);
  });

  it("verify_pack.should get the top ten songs sorted by playbacks", async () => {
    const res = await request(app).get("/api/songs/top");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("data");
    const playbacks = res.body.data.map((e) => e.playbacks);
    expect(playbacks.length).toEqual(10);
    expect(playbacks[0]).not.toEqual(undefined);
    const sortedPlaybacks = [...playbacks].sort((a, b) => b - a);
    expect(playbacks).toEqual(sortedPlaybacks);
  });

  it("verify_pack.should get the top three artists", async () => {
    const res = await request(app).get("/api/artists/top");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("data");
    expect(res.body.data.length).toEqual(3);
  });
  it("verify_pack.should get the top three artists sorted by totalPlaybacks", async () => {
    const res = await request(app).get("/api/artists/top");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("data");
    const totalPlaybacks = res.body.data.map((e) => e.totalPlaybacks);
    expect(totalPlaybacks.length).toEqual(3);
    expect(totalPlaybacks[0]).not.toEqual(undefined);
    const sortedTotalPlaybacks = [...totalPlaybacks].sort((a, b) => b - a);
    expect(totalPlaybacks).toEqual(sortedTotalPlaybacks);
  });
});
