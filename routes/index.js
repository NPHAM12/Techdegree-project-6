//Main Page
const express = require('express');
const router = express.Router();

// Get the list of projects from JSON
const listOfProjects = require('../data.json').projects; //array of objects

// Render Main page
router.get('/', (req, res) => {
    // console.log("index");
    res.render("index", {listOfProjects}); //render projects on mainpage
});

// Render About page
router.get('/about', (req, res)=>{
  // console.log("about");
  res.render("about");
});

module.exports = router;
