//  _________________________
// |                         |
// |        HTML ROUTES      |
// |_________________________|

// DEPENDENCIES
const path = require("path");
// const express = require('express');
// const app = express();

// ROUTES

module.exports = function (app) {
    // INDEX HTML
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../Public/index.html"));
    });

    // CREATE Shop HTML
    app.get("/shop", function (req, res) {
        res.sendFile(path.join(__dirname, "../Public/shop.html"));
    });

    // CREATE Contact HTML
    app.get("/contact", function (req, res) {
        res.sendFile(path.join(__dirname, "../Public/contact.html"));
    });

    // app.get('/contact', (req, res) => {
    //     res.render('contact', {layout: false});
    // });
};
