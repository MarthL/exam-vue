const Todo = require('../models/todos')

exports.list = (req, res) => {
    console.log("get request")
    Todo.find().then((todo) => {
        res.status(200).json(todo)
    }).catch(error => res.status(400).json(error))
}
exports.getOneItem = (req, res) => {
    Todo.findOne({
        _id: req.params.id
    }).then((todo) => {
        res.status(200).json(todo)
    }).catch(error => res.status(400).json({error}))
}

exports.postItem= (req, res) => {
    console.log("post request")
    Todo.create( {
        title:  req.body.title, // String is shorthand for {type: String}
        description:   req.body.description,
        date: req.body.date,
        done: false,
    }).then(() => {
        res.status(200).json('OK')
    }).catch(error => res.status(301).json({error}))
}

exports.patchItem = (req, res) => {
    console.log("update request")
    Todo.updateOne({
        _id: req.params.id
    },
        {
            title: req.body.title,
            description: req.body.description,
            date: req.body.date,
            done: req.body.done
        }).then(() => {
            res.status(200).json('Updated')
    }).catch(error => res.status(301).json({error}))
}

exports.deleteItem = (req, res) => {
    console.log("delete request")
    Todo.deleteOne({
        _id: req.params.id
    }).then(() => {
        res.status(200).json('Deleted')
    }).catch(error => res.status(301).json({error}))
}