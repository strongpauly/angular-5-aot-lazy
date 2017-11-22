"use strict";
const ng_1 = require("./ng");
const express = require("express");
let router = express.Router();
router.get('/*', new ng_1.GetNGIndex().getIndexFile);
module.exports = router;
