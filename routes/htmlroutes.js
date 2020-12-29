//  _________________________
// |                         |
// |        HTML ROUTES      |
// |_________________________|

// DEPENDENCIES
const path = require("path");
const exphbs = require('express-handlebars');
const express = require('express');
const app = express();

// Requiring our custom middleware for checking if a user is logged in
// var isAuthenticated = require("../config/middleware/isAuthenticated"); This is not implemented at this time
// View engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
// ROUTES

module.exports = function (app) {
    // INDEX HTML
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../Public/index.html"));
    });

    // CREATE USER HTML
    app.get("/shop", function (req, res) {
        res.sendFile(path.join(__dirname, "../Public/shop.html"));
    });

    app.get('/contact', (req, res) => {
        res.render('contact', {layout: false});
    });
};
