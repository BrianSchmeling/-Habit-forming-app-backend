const Habits = require("../models/Habits")

module.exports = {
    index: (req, res) => {
        Habits.find()
        .then(habit => {
            res.json(habit)
        })
    },
    show: (req, res) => {
        Habits.findById(req.params.id)
        .then(habit => {
            res.json(habit)
        })
    },
    create: (req, res) => {
        Habits.create(req.body)
        .then(habit => {
            res.json(habit)
        })
    },
    edit: (req, res) => {
        Habits.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(habit => {
            res.json(habit)
        })
    },
    delete: (req, res) => {
        Habits.findByIdAndDelete(req.params.id)
        .then(habit => {
            res.json(habit)
        })
    }
}