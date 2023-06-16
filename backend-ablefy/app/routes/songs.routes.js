module.exports = (app) => {
  const songs = require("../controllers/song.controller.js");

  var router = require("express").Router();

  router.get("/", songs.findAll);

  // TOP TEN
  router.get("/top", songs.getTopTen);

  router.get("/:id", songs.findOne);

  app.use("/api/songs", router);
};
