const express = require('express');
const app = express();

// localhost: port 4000
const port = 4000;

//set static file to serve the static files located in the public folder such as CSS, or Images
app.use('/static',express.static('public'));

//Middleware: set which template (pug) for view engine
app.set('view engine', 'pug');

//Imports main page Route
const routes = require ('./routes/index'); //index.js
app.use(routes);

// Import project page route
const projectRoutes = require('./routes/project'); //project.js
app.use(projectRoutes);

//Error 404 Handler
app.use((req, res, next) => {
    console.log("Page Error");
    const err = new Error("Page Not Found");
    err.status = 404;
    next(err);
});

// Error Middleware
app.use((err, req, res, next) => {
    res.locals.error = err;
    console.log(`Error Now!!! ${err.status}`)
    res.status(err.status);
    res.render('error');
});

// listen on port 4000
app.listen(port, ()=>{console.log(`Running on local hostport: ${port}`);
});
