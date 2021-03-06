const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");

require('dotenv').config();

// port
const PORT = process.env.PORT || 9999;
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
// (html allower)
app.use(express.static(__dirname + '/Public'));

// Parse application body as JSON
// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Import routes and give the server access to them.
require("./routes/nodeMailerRoutes.js")(app);
require("./routes/htmlroutes.js")(app);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});


