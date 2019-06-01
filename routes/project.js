//Project Page
const express = require('express');
const router = express.Router();

// Get the list of projects from JSON
const listOfProjects = require('../data.json').projects; //array of objects

// Route to Project page
router.get('/projects/:id', (req, res) => {
  //Route path: /todos/:id
  //Request URL: http://localhost:xxxx/todos/36
  //req.params : {'id': '36'}
  const id = req.params.id;
  const proj = listOfProjects[id];
  // if user enter a number in URL is larger than amount of projects
  if (id >= listOfProjects.length) {
    return res.redirect('/'); //return to homepage
  }
  //show a selected project
  else {
    res.render('project', {proj}); //render projects on project page
    //'project' here is 'project.pug'
    //project: listOfProjects[id] -> project is an object variable -> project.pug
  }
});
module.exports = router;
