"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetNGIndex {
    constructor() {
    }
    getIndexFile(req, res) {
        res.render('index/index-ng');
    }
}
exports.GetNGIndex = GetNGIndex;
