const UserLogin = require("../models/UserLogin");

module.exports = {
  index: (req, res) => {
    UserLogin.find().then((user) => {
      res.json(user);
    });
  },
  login: async (req, res, next) => {
    try {
      const user = await UserLogin.findOne({
        username: req.body.username,
        password: req.body.password,
      });
      if (!user) {
        res.status(401).json({
          message: "Login not successful",
          error: "User not found",
        });
      } else {
        res.status(200).json({
          message: "Login successful",
          user,
        });
      }
    } catch (error) {
      res.status(400).json({
        message: "An error occurred",
        error: error.message,
      });
    }
  },
  create: (req, res) => {
    UserLogin.create(req.body).then((user) => {
      res.json(user);
    });
  },
  edit: (req, res) => {
    UserLogin.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
      (user) => {
        res.json(user);
      }
    );
  },
  delete: (req, res) => {
    UserLogin.findByIdAndDelete(req.params.id).then((user) => {
      res.json(user);
    });
  },
};
