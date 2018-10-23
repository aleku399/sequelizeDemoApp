const express = require('express');
const router = express.Router();
const Todo = require("../../models/todo").Todo;

// module.exports = {
//     create(req, res) {
//       return Todo
//         .create({
//           title: req.body.title,
//         })
//         .then(todo => res.status(201).send(todo))
//         .catch(error => res.status(400).send(error));
//     },
//   };
router.post('/', function(req, res) {
  Todo.create({
    title: req.body.title
  }).then(function(todo) {
    res.json(todo);
  });
});

module.exports = router;