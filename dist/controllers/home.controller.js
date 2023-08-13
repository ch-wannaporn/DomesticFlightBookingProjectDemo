"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const flight_model_1 = require("../models/flight.model");
const router = (0, express_1.Router)();
const home = (req, res) => {
    console.log("hi");
    (0, flight_model_1.get)();
    res.render("home");
};
router.get("/", home);
exports.default = router;
//# sourceMappingURL=home.controller.js.map