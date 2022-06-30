const UserHabits = require("../models/UserHabits");

module.exports = {
  index: (req, res) => {
    UserHabits.find().then((userhabit) => {
      res.json(userhabit);
    });
  },
  show: (req, res) => {
    UserHabits.findById(req.params.id).then((userhabit) => {
      res.json(userhabit);
    });
  },
  create: (req, res) => {
    UserHabits.create(req.body).then((userhabit) => {
      res.json(userhabit);
    });
  },
  edit: (req, res) => {
    UserHabits.findOneAndUpdate({ habitName: req.params.id }, req.body, {
      new: true,
    }).then((userhabit) => {
      res.json(userhabit);
    });
  },
  delete: (req, res) => {
    UserHabits.findByIdAndDelete(req.params.id).then((userhabit) => {
      res.json(userhabit);
    });
  },
};
