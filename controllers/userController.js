const { Thought, User } = require("../models");

module.exports = {
  // Get all users
  getUsers(req, res) {
    User.find()
      .then((usersData) => res.json(usersData))
      .catch((err) => res.status(500).json(err));
  },
  // Get specific user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .then((userData) =>
        !userData
          ? res.status(404).json({ message: "No user found with this ID" })
          : res.json(userData)
      )
      .catch((err) => res.status(500).json(err));
  },
};