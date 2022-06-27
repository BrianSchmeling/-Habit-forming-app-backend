const UserLogin = require("../models/UserLogin")

module.exports = {
    index: (req, res) => {
        UserLogin.find()
        .then(user => {
            res.json(user)
        })
    },
    show: (req, res) => {
        UserLogin.findById(req.params.id)
        .then(user => {
            res.json(user)
        })
    },
    create: (req, res) => {
        UserLogin.create(req.body)
        .then(user => {
            res.json(user)
        })
    },
    edit: (req, res) => {
        UserLogin.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(user => {
            res.json(user)
        })
    },
    delete: (req, res) => {
        UserLogin.findByIdAndDelete(req.params.id)
        .then(user => {
            res.json(user)
        })
    }
}