const SongService = require('../services/song.services')

exports.findAll = (req, res) => {
  const title = req.query.title;
  const page = parseInt(req.query.page) || 1;
  const size = parseInt(req.query.size) || 10;

  SongService.findAll(title, page, size)
    .then((data) => {
      res.send({ data });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving songs.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  SongService.findOne(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Song with id " + id });
      else res.send({ data });
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Song with id=" + id });
    });
};

exports.getTopTen = (req, res) => {
  SongService.getTopTen()
    .then((data) => {
      res.send({ data });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving songs.",
      });
    });
};
