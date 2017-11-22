'use strict';
const path = require("path");
const express = require("express");
const routes = require('./app/routes/routes');
const serverRoot = __dirname;
const app = express();
routes(app);
app.set('views', path.join(serverRoot, '/app/views'));
app.set('view engine', 'pug');
// Run the server
const port = process.env.NODE_PORT || 3000;
app.listen(port, function () {
    console.log(`Server started on port ${port}`);
});
module.exports = app;
