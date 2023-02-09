"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class UserRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get("/", (req, res) => {
            res.json({ "message": "route has been run" });
        });
        this.router.post("/", (req, res) => {
            res.json(req.body);
        });
    }
}
exports.default = new UserRoutes().router;
