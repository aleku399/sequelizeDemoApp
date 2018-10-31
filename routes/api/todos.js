const express = require('express');
const router = express.Router();
const models = require("../../models");

router.post('/', function(req, res) {
  models.Todo.create({
    title: req.body.title
  }).then(function() {
    res.redirect('/');
  });
});

router.get('/', (req, res) => {
  models.Todo.findAll({})
  .then(todos => {
    console.log('todos:',todos);
    res.render('index', {todos});
  });
});

router.get('/todo/:id', (req, res) => {
  models.Todo.find({
    where: {
      id: req.params.id
    }
  }).then((todo) => res.json(todo) );
});

router.put('/todo/:id', function(req, res) {
  models.Todo.find({
    where: {
      id: req.params.id
    }
  }).then(function(todo) {
    if(todo){
      todo.updateAttributes({
        title: req.body.title,
        complete: req.body.complete
      }).then(function(todo) {
        res.send(todo);
      });
    }
  });
});

router.delete('/todo/:id', function(req, res) {
  models.Todo.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(todo) {
    res.json(todo);
  });
});

module.exports = router;
