const Budget = require('../models/budget');

module.exports = {
    create,
    index,
    delete: deleteOne,
    show,
    update
}

function create(req, res) {
    Budget.create(req.body)
    .then(budget => {res.json(budget)})
    .catch(err => {res.json(err)})
}

function index(req, res) {
    Budget.find({})
    .then(budget => {res.json(budget)})
    .catch(err => {res.json(err)})
}

function deleteOne(req, res) {
    Budget.findByIdAndDelete(req.params.id)
    .then(budget => {res.json(budget)})
    .catch(err => {res.json(err)})
}

function show(req, res) {
    Budget.findById(req.params.id)
    .then(budget => {res.json(budget)})
    .catch(err => {res.json(err)})
}

function update(req, res) {
    Budget.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(budget => {res.json(budget)})
    .catch(err => {res.json(err)})
}