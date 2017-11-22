'use strict';
const path = require("path");
const express = require("express");
const os = require("os");
let serverRoot = __dirname;
let clientRoot = path.join(__dirname, '../');
routes(app);
app.set('views', path.join(serverRoot, '/app/views'));
app.set('view engine', 'pug');
// Run the server
app.listen(process.env.NODE_PORT || 3000, function () {
    console.log('Server started');
});
module.exports = app;
