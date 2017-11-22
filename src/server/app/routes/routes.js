"use strict";
const path = require("path");
const express = require("express");
const ng_1 = require("../views/index/ng");
const clientRoot = path.join(__dirname, '../../../client');
function route(app) {
    app.use('/client', express.static(clientRoot, {
        fallthrough: false
    }));
    app.use('/', require('../views/index'));
    app.use(['/routes/*'], new ng_1.GetNGIndex().getIndexFile);
    // All undefined asset or api routes should return a 404
    app.route('/:url(api|auth|components|app|bower_components|assets)/*')
        .get(function (req, res) {
        return res.status(404).json({});
    });
}
module.exports = route;
