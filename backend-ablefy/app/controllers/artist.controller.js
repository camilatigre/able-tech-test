const ArtistService = require('../services/artist.services')

exports.findAll = (req, res) => {
  const name = req.query.name;

  ArtistService.findAll(name)
    .then((data) => {
      res.send({ data });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving artists.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  ArtistService.findOne(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Artist with id " + id });
      else res.send({ data });
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Artist with id=" + id });
    });
};

exports.getTopThree = (req, res) => {
  ArtistService.getTopThree()
    .then((data) => {
      res.send({ data });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving artists.",
      });
    });
};
