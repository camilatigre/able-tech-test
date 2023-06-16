module.exports = (app) => {
  const artists = require("../controllers/artist.controller.js");

  var router = require("express").Router();

  router.get("/", artists.findAll);

  // TOP THREE
  router.get("/top", artists.getTopThree);

  router.get("/:id", artists.findOne);

  app.use("/api/artists", router);
};
